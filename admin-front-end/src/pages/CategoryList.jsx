import React, { useEffect, useState } from "react";
import { getItems, deleteItem } from '../services/categoryApi';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function CategoryList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await getItems();
            setItems(response.data);
        } catch (error) {
            console.error("Failed to fetch items:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await deleteItem(id);
                setItems(items.filter(item => item.id !== id)); // Cập nhật trạng thái để loại bỏ mục đã xóa
            } catch (error) {
                console.error("Failed to delete item:", error);
            }
        }
    };

    return (
        <div>
            <div id="global-loader">
                <div className="whirly-loader"> </div>
            </div>

            <div className="main-wrapper">
                <Header />
                <Sidebar />

                <div className="page-wrapper">
                    <div className="content">
                        <div className="page-header">
                            <div className="page-title">
                                <h4>Product Category list</h4>
                                <h6>View/Search product Category</h6>
                            </div>
                            <div className="page-btn">
                                <a href="/addcategory" className="btn btn-added">
                                    <img src="assets/img/icons/plus.svg" className="me-1" alt="img" />Add Category
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="table-top">
                                    <div className="search-set">
                                        <div className="search-path">
                                            <a className="btn btn-filter" id="filter_search">
                                                <img src="assets/img/icons/filter.svg" alt="img" />
                                                <span><img src="assets/img/icons/closes.svg" alt="img" /></span>
                                            </a>
                                        </div>
                                        <div className="search-input">
                                            <a className="btn btn-searchset"><img src="assets/img/icons/search-white.svg"
                                                alt="img" /></a>
                                        </div>
                                    </div>
                                    <div className="wordset">
                                        <ul>
                                            <li>
                                                <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img
                                                    src="assets/img/icons/pdf.svg" alt="img" /></a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img
                                                    src="assets/img/icons/excel.svg" alt="img" /></a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img
                                                    src="assets/img/icons/printer.svg" alt="img" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card" id="filter_inputs">
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-lg-2 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <select className="select">
                                                        <option>Choose Category</option>
                                                        <option>Computers</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <select className="select">
                                                        <option>Choose Sub Category</option>
                                                        <option>Fruits</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <select className="select">
                                                        <option>Choose Sub Brand</option>
                                                        <option>Iphone</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                                                <div className="form-group">
                                                    <a className="btn btn-filters ms-auto"><img
                                                        src="assets/img/icons/search-whites.svg" alt="img" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table datanew">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <label className="checkboxs">
                                                        <input type="checkbox" id="select-all" />
                                                        <span className="checkmarks"></span>
                                                    </label>
                                                </th>
                                                <th>STT</th>
                                                <th>Category name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="list-category">
                                            {items.map((list, index) => (
                                                <tr key={list.id}>
                                                    <td>
                                                        <label className="checkboxs">
                                                            <input type="checkbox" />
                                                            <span className="checkmarks"></span>
                                                        </label>
                                                    </td>
                                                    <td>{index + 1}</td>
                                                    <td>{list.name}</td>
                                                    <td>
                                                        <a className="me-3" href={`/editcategory/${list.id}`}>
                                                            <img src="assets/img/icons/edit.svg" alt="img" />
                                                        </a>
                                                        <a
                                                            className="me-3 confirm-text"
                                                            href="javascript:void(0);"
                                                            onClick={() => handleDelete(list.id)}
                                                        >
                                                            <img src="assets/img/icons/delete.svg" alt="img" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { createItem } from '../services/categoryApi';

export default function AddCategory({ onItemCreated = () => { } }) {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name };
        try {
            await createItem(newItem);
            onItemCreated(); // Gọi hàm nếu có
            window.location.href = "/categorylist"; // Chuyển hướng sau khi tạo mới thành công
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <div>
            <div id="global-loader">
                <div className="whirly-loader"></div>
            </div>

            <div className="main-wrapper">
                <Header />
                <Sidebar />
                <div className="page-wrapper">
                    <div className="content">
                        <div className="page-header">
                            <div className="page-title">
                                <h4>Product Add Category</h4>
                                <h6>Create new product Category</h6>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-lg-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <label>Category Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" id="create" className="btn btn-submit me-2">Create</button>
                                            <a href="/categorylist" className="btn btn-cancel">Cancel</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

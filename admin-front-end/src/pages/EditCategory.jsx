import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { updateItem } from '../services/categoryApi';

export default function EditCategory({ item, onItemUpdated = () => { } }) {

  const [name, setName] = useState('');

  useEffect(() => {
    if (item && item.name) {
      setName(item.name);
    }
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = { name };
    await updateItem(item.id, updatedItem);
    onItemUpdated();
    window.location.href = "/categorylist";
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
                <h4>Product Edit Category</h4>
                <h6>Edit a product Category</h6>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="row">
                  <form onSubmit={handleSubmit}>
                    <div className="col-lg-12 col-sm-12 col-12" id="renderCategoryById">
                      <div className="form-group">
                        <label>Category Name</label>
                        <input
                          type="text"
                          id="categoryName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" id="edit-category-form" className="btn btn-submit me-2">Update</button>
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
  )
}

var listCategoryApi = 'https://localhost:7134/api/Categories';

function start() {
    getListCategory(renderListCategory);
    handleCreateCategory();

    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('id');
    console.log(categoryId);
    getCategoryById(categoryId, renderCategoryById);
}

start();

//getall
function getListCategory(callback) {
    fetch(listCategoryApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderListCategory(categories) {
    var listCategory = document.querySelector('#list-category');
    if (listCategory) {
        var htmls = categories.map(function (category, index) {
            return `
                <tr>
                    <td>
                        <label class="checkboxs">
                            <input type="checkbox">
                            <span class="checkmarks"></span>
                        </label>
                    </td>
                    <td>${index + 1}</td>
                    <td>
                        <p href="javascript:void(0);">${category.name}</p>
                    </td>
                    <td>
                        <button class="me-3" onclick="redirectToEditPage(${category.id})">
                            <img src="assets/img/icons/edit.svg" alt="img">
                        </button>
                        <button class="me-3" onclick="handleDeleteCategory(${category.id})">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </button>
                    </td>
                </tr>
            `;
        });

        listCategory.innerHTML = htmls.join('');
    } else {
        console.error('Không tìm thấy phần tử với id là "list-category" trong DOM.');
    }
}

//create
function handleCreateCategory() {
    var createBtn = document.querySelector('#create');

    if (createBtn) {
        createBtn.onclick = function () {
            var name = document.querySelector('input[name="name"]').value;

            var formData = {
                name: name
            };

            createCategory(formData, function () {
                // Chuyển hướng sau khi tạo
                window.location.href = './categorylist.html';
            });
        };
    } else {
        console.error('Không tìm thấy phần tử với id là "create" trong DOM.');
    }
}

function createCategory(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    fetch(listCategoryApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

//edit

async function getCategoryById(categoryId, callback) {
    fetch(listCategoryApi + "/" + categoryId)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(callback)
        .catch(function (error) {
            console.error('Fetch error:', error);
        });
}

function renderCategoryById(category) {
    var categoryById = document.querySelector('#renderCategoryById');
    var html = `
        <div class="form-group">
            <label>Category Name</label>
            <input type="text" id="categoryName" value="${category.name}">
        </div>
        <div class="col-lg-12">
            <button class="me-2" onclick="handleEditCategory(${category.id})">Sửa</button>
            <a href="categorylist.html" class="btn btn-cancel">Cancel</a>
        </div>
    `;
    categoryById.innerHTML = html;
}

function handleEditCategory(id) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(listCategoryApi + "/" + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            // Tải lại danh sách sau khi xóa
            getListCategory(renderListCategory);
        });
}


// document.addEventListener('DOMContentLoaded', (event) => {
//     const params = new URLSearchParams(window.location.search);
//     const categoryId = params.get('id');

//     if (categoryId) {
//         fetch(`https://localhost:7134/categories/${categoryId}`)
//             .then(response => response.json())
//             .then(data => {
//                 document.getElementById('categoryName').value = data.name;
//             })
//             .catch(error => console.error('Error:', error));
//     }
// });

// document.getElementById('editCategoryForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const params = new URLSearchParams(window.location.search);
//     const categoryId = params.get('id');
//     const name = document.getElementById('categoryName').value;

//     fetch(`https://localhost:7134/categories/${categoryId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: name }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             // Optionally, redirect to another page or show a success message
//         })
//         .catch(error => console.error('Error:', error));
// });

//delete
function handleDeleteCategory(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(listCategoryApi + "/" + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            // Tải lại danh sách sau khi xóa
            getListCategory(renderListCategory);
        });
}


//
function redirectToEditPage(id) {
    window.location.href = `./editcategory.html?id=${id}`;
}
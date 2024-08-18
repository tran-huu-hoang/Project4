var listProductApi = 'https://localhost:7134/api/Products'

function start() {
    getListProduct(renderListProduct)
}

start();

function getListProduct(calback) {
    fetch(listProductApi)
        .then(function (response) {
            return response.json()
        })
        .then(calback)
}

function renderListProduct(courses) {
    var listProduct = document.querySelector('#list-product')
    var htmls = courses.map(function (course) {
        return `
            <div class="col-12 col-sm-6 col-lg-4">
                    <!-- Card Product-->
                    <div class="card border border-transparent position-relative overflow-hidden h-100 transparent">
                        <div class="card-img position-relative">
                            <div class="card-badges">
                                <span class="badge badge-card"><span
                                        class="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span> Sale</span>
                            </div>
                            <span class="position-absolute top-0 end-0 p-2 z-index-20 text-muted"><i
                                    class="ri-heart-line"></i></span>
                            <picture class="position-relative overflow-hidden d-block bg-light">
                                <img class="w-100 img-fluid position-relative z-index-10" title=""
                                    src="./assets/images/products/product-1.jpg" alt="">
                            </picture>
                            <div class="position-absolute start-0 bottom-0 end-0 z-index-20 p-2">
                                <button class="btn btn-quick-add"><i class="ri-add-line me-2"></i> Quick Add</button>
                            </div>
                        </div>
                        <div class="card-body px-0">
                            <a class="text-decoration-none link-cover" href="./product.html">${course.productName}</a>
                            <small class="text-muted d-block">4 colours, 10 sizes</small>
                            <p class="mt-2 mb-0 small"><s class="text-muted">${course.price}</s> <span
                                    class="text-danger">${course.salePrice}</span></p>
                        </div>
                    </div>
                    <!--/ Card Product-->
                </div>
            `
    })

    listProduct.innerHTML = htmls.join('');
}
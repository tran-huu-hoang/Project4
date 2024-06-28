using Project4.Models;
using Project4.Repositories.CategoryRepository;
using Project4.Repositories.ProductRepository;

namespace Project4.Services.ProductService
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<List<Product>> GetProducts()
        {
            return await _productRepository.GetProducts();
        }
        public async Task<Product> GetProduct(int id)
        {
            return await _productRepository.GetProduct(id);
        }

        public async Task<List<Product>> PostProduct(Product product)
        {
            return await _productRepository.PostProduct(product);
        }

        public async Task<List<Product>> PutProduct(int id, Product product)
        {
            return await _productRepository.PutProduct(id, product);
        }
        public async Task<List<Product>> DeleteProduct(int id)
        {
            return await _productRepository.DeleteProduct(id);
        }
    }
}

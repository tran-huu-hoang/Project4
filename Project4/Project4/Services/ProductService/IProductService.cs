using Project4.Models;

namespace Project4.Services.ProductService
{
    public interface IProductService
    {
        Task<List<Product>> GetProducts();
        Task<Product> GetProduct(int id);
        Task<List<Product>> PostProduct(Product product);
        Task<List<Product>> PutProduct(int id, Product product);
        Task<List<Product>> DeleteProduct(int id);
    }
}

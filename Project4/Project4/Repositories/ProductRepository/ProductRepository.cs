using Microsoft.EntityFrameworkCore;
using Project4.Models;

namespace Project4.Repositories.ProductRepository
{
    public class ProductRepository : IProductRepository
    {
        private readonly MockProject4DbContext _context;

        public ProductRepository(MockProject4DbContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }
        public async Task<Product> GetProduct(int id)
        {
            return await _context.Products.FindAsync(id);
        }

        public async Task<List<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return await _context.Products.ToListAsync();
        }

        public async Task<List<Product>> PutProduct(int id, Product product)
        {
            _context.Products.Update(product);

            await _context.SaveChangesAsync();

            return await _context.Products.ToListAsync();
        }
        public async Task<List<Product>> DeleteProduct(int id)
        {
            var category = await _context.Products.FindAsync(id);

            _context.Products.Remove(category);
            await _context.SaveChangesAsync();

            return await _context.Products.ToListAsync();
        }
    }
}

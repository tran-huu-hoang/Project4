using Project4.Models;
using Microsoft.EntityFrameworkCore;

namespace Project4.Repositories.CategoryRepository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly MockProject4DbContext _context;

        public CategoryRepository(MockProject4DbContext context)
        {
            _context = context;
        }

        public async Task<List<Category>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category> GetCategory(int id)
        {
            return await _context.Categories.FindAsync(id);
        }

        public async Task<List<Category>> PostCategory(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return await _context.Categories.ToListAsync();
        }

        public async Task<List<Category>> PutCategory(int id, Category category)
        {
            _context.Categories.Update(category);

            await _context.SaveChangesAsync();

            return await _context.Categories.ToListAsync();
        }
        public async Task<List<Category>> DeleteCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return await _context.Categories.ToListAsync();
        }
    }
}

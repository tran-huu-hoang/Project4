using Project4.Models;

namespace Project4.Repositories.CategoryRepository
{
    public interface ICategoryRepository
    {
        Task<List<Category>> GetCategories();
        Task<Category> GetCategory(int id);
        Task<List<Category>> PostCategory(Category category);
        Task<List<Category>> PutCategory(int id, Category category);
        Task<List<Category>> DeleteCategory(int id);
    }
}

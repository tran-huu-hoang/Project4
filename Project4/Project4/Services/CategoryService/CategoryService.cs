using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project4.Models;
using Project4.Repositories.CategoryRepository;


namespace Project4.Services.CategoryService
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<List<Category>> GetCategories()
        {
            return await _categoryRepository.GetCategories();
        }

        public async Task<Category> GetCategory(int id)
        {
            return await _categoryRepository.GetCategory(id);
        }

        public async Task<List<Category>> PostCategory(Category category)
        {
            return await _categoryRepository.PostCategory(category);
        }

        public async Task<List<Category>> PutCategory(int id, Category category)
        {
            return await _categoryRepository.PutCategory(id, category);
        }

        public async Task<List<Category>> DeleteCategory(int id)
        {
            return await _categoryRepository.DeleteCategory(id);
        }
    }
}

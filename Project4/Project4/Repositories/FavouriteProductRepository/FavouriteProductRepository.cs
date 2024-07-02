using Microsoft.EntityFrameworkCore;
using Project4.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Project4.Repositories.FavouriteProductRepository
{
    public class FavouriteProductRepository : IFavouriteProductRepository
    {

        private readonly MockProject4DbContext _context;

        public FavouriteProductRepository(MockProject4DbContext context)
        {
            _context = context;
        }

        public async Task<List<FavouriteProduct>> GetFavouriteProducts()
        {
            return await _context.FavouriteProducts.ToListAsync();
        }

        public async Task<FavouriteProduct> GetFavouriteProduct(int id)
        {
            return await _context.FavouriteProducts.FindAsync(id); ;
        }

        public async Task<List<FavouriteProduct>> PostFavouriteProduct(FavouriteProduct favouriteProduct)
        {
            _context.FavouriteProducts.Add(favouriteProduct);
            await _context.SaveChangesAsync();

            return await _context.FavouriteProducts.ToListAsync();
        }

        public async Task<List<FavouriteProduct>> PutFavouriteProduct(int id, FavouriteProduct favouriteProduct)
        {
            _context.FavouriteProducts.Update(favouriteProduct);

            await _context.SaveChangesAsync();

            return await _context.FavouriteProducts.ToListAsync();
        }

        public async Task<List<FavouriteProduct>> DeleteFavouriteProduct(int id)
        {
            var favouriteProduct = await _context.FavouriteProducts.FindAsync(id);

            _context.FavouriteProducts.Remove(favouriteProduct);
            await _context.SaveChangesAsync();

            return await _context.FavouriteProducts.ToListAsync();
        }
    }
}

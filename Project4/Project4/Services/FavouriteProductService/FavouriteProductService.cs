using Project4.Models;
using Project4.Repositories.CategoryRepository;
using Project4.Repositories.FavouriteProductRepository;

namespace Project4.Services.FavouriteProductService
{
    public class FavouriteProductService : IFavouriteProductService
    {
        private readonly IFavouriteProductRepository _favouriteProductRepository;

        public FavouriteProductService(IFavouriteProductRepository favouriteProductRepository)
        {
            _favouriteProductRepository = favouriteProductRepository;
        }
        

        

        public async Task<List<FavouriteProduct>> GetFavouriteProducts()
        {
            return await _favouriteProductRepository.GetFavouriteProducts();
        }
        public async Task<FavouriteProduct> GetFavouriteProduct(int id)
        {
            return await _favouriteProductRepository.GetFavouriteProduct(id);
        }

        public async Task<List<FavouriteProduct>> PostFavouriteProduct(FavouriteProduct favouriteProduct)
        {
            return await _favouriteProductRepository.PostFavouriteProduct(favouriteProduct);
        }

        public async Task<List<FavouriteProduct>> PutFavouriteProduct(int id, FavouriteProduct favouriteProduct)
        {
            return await _favouriteProductRepository.PutFavouriteProduct(id, favouriteProduct);
        }
        public async Task<List<FavouriteProduct>> DeleteFavouriteProduct(int id)
        {
            return await _favouriteProductRepository.DeleteFavouriteProduct(id);
        }
    }
}

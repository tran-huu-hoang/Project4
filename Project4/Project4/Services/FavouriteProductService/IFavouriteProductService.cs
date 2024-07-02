﻿using Project4.Models;

namespace Project4.Services.FavouriteProductService
{
    public interface IFavouriteProductService
    {
        Task<List<FavouriteProduct>> GetFavouriteProducts();
        Task<FavouriteProduct> GetFavouriteProduct(int id);
        Task<List<FavouriteProduct>> PostFavouriteProduct(FavouriteProduct favouriteProduct);
        Task<List<FavouriteProduct>> PutFavouriteProduct(int id, FavouriteProduct favouriteProduct);
        Task<List<FavouriteProduct>> DeleteFavouriteProduct(int id);
    }
}

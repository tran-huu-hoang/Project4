using Project4.Models;

namespace Project4.Services.RateService
{
    public interface IRateService
    {
        Task<List<Rate>> GetRates();
        Task<Rate> GetRate(int id);
        Task<List<Rate>> PostRate(Rate rate);
        Task<List<Rate>> PutRate(int id, Rate rate);
        Task<List<Rate>> DeleteRate(int id);
    }
}

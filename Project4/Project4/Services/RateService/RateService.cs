using Project4.Models;
using Project4.Repositories.RateRepository;

namespace Project4.Services.RateService
{
    public class RateService : IRateService
    {
        private readonly IRateRepository _rateRepository;

        public RateService(IRateRepository rateRepository)
        {
            _rateRepository = rateRepository;
        }
        public async Task<List<Rate>> GetRates()
        {
            return await _rateRepository.GetRates();
        }       

        public async Task<Rate> GetRate(int id)
        {
            return await _rateRepository.GetRate(id);
        }
        
        public async Task<List<Rate>> PostRate(Rate rate)
        {
            return await _rateRepository.PostRate(rate);
        }

        public async Task<List<Rate>> PutRate(int id, Rate rate)
        {
            return await _rateRepository.PutRate(id, rate);
        }
        public async Task<List<Rate>> DeleteRate(int id)
        {
            return await _rateRepository.DeleteRate(id);
        }
    }
}

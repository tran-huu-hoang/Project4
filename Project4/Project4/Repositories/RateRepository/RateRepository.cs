using Microsoft.EntityFrameworkCore;
using Project4.Models;

namespace Project4.Repositories.RateRepository
{
    public class RateRepository : IRateRepository
    {
        private readonly MockProject4DbContext _context;

        public RateRepository(MockProject4DbContext context)
        {
            _context = context;
        }
        public async Task<List<Rate>> GetRates()
        {
            return await _context.Rates.ToListAsync();
        }
        public async Task<Rate> GetRate(int id)
        {
            return await _context.Rates.FindAsync(id); ;
        }

        public async Task<List<Rate>> PostRate(Rate rate)
        {
            _context.Rates.Add(rate);
            await _context.SaveChangesAsync();

            return await _context.Rates.ToListAsync();
        }

        public async Task<List<Rate>> PutRate(int id, Rate rate)
        {
            _context.Rates.Update(rate);

            await _context.SaveChangesAsync();

            return await _context.Rates.ToListAsync();
        }
        public async Task<List<Rate>> DeleteRate(int id)
        {
            var rate = await _context.Rates.FindAsync(id);

            _context.Rates.Remove(rate);
            await _context.SaveChangesAsync();

            return await _context.Rates.ToListAsync();
        }
    }
}

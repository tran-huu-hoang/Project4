using Microsoft.EntityFrameworkCore;
using Project4.Models;

namespace Project4.Repositories.SupplierRepository
{
    public class SupplierRepository : ISupplierRepository
    {
        private readonly MockProject4DbContext _context;

        public SupplierRepository(MockProject4DbContext context)
        {
            _context = context;
        }

        public async Task<List<Supplier>> GetSuppliers()
        {
            return await _context.Suppliers.ToListAsync();
        }

        public async Task<Supplier> GetSupplier(int id)
        {
            return await _context.Suppliers.FindAsync(id);
        }

        public async Task<List<Supplier>> PostSupplier(Supplier supplier)
        {
            _context.Suppliers.Add(supplier);
            await _context.SaveChangesAsync();

            return await _context.Suppliers.ToListAsync();
        }

        public async Task<List<Supplier>> PutSupplier(int id, Supplier supplier)
        {
            _context.Suppliers.Update(supplier);

            await _context.SaveChangesAsync();

            return await _context.Suppliers.ToListAsync();
        }
        public async Task<List<Supplier>> DeleteSupplier(int id)
        {
            var supplier = await _context.Suppliers.FindAsync(id);

            _context.Suppliers.Remove(supplier);
            await _context.SaveChangesAsync();

            return await _context.Suppliers.ToListAsync();
        }
    }
}

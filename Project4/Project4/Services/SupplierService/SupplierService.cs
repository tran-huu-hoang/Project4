using Microsoft.EntityFrameworkCore;
using Project4.Models;
using Project4.Repositories.CategoryRepository;
using Project4.Repositories.SupplierRepository;

namespace Project4.Services.SupplierService
{
    public class SupplierService : ISupplierService
    {
        private readonly ISupplierRepository _supplierRepository;

        public SupplierService(ISupplierRepository supplierRepository)
        {
            _supplierRepository = supplierRepository;
        }

        public async Task<List<Supplier>> GetSuppliers()
        {
            return await _supplierRepository.GetSuppliers();
        }

        public async Task<Supplier> GetSupplier(int id)
        {
            return await _supplierRepository.GetSupplier(id);
        }

        public async Task<List<Supplier>> PostSupplier(Supplier supplier)
        {
            return await _supplierRepository.PostSupplier(supplier);
        }

        public async Task<List<Supplier>> PutSupplier(int id, Supplier supplier)
        {
            return await _supplierRepository.PutSupplier(id, supplier);
        }
        public async Task<List<Supplier>> DeleteSupplier(int id)
        {
            return await _supplierRepository.DeleteSupplier(id);
        }
    }
}

using Project4.Models;

namespace Project4.Services.SupplierService
{
    public interface ISupplierService
    {
        Task<List<Supplier>> GetSuppliers();
        Task<Supplier> GetSupplier(int id);
        Task<List<Supplier>> PostSupplier(Supplier supplier);
        Task<List<Supplier>> PutSupplier(int id, Supplier supplier);
        Task<List<Supplier>> DeleteSupplier(int id);
    }
}

using Project4.Models;

namespace Project4.Services.OrderService
{
    public interface IOrderService
    {
        Task<List<Order>> GetOrders();
        Task<Order> GetOrder(int id);
        Task<List<Order>> PostOrder(Order order);
        Task<List<Order>> PutOrder(int id, Order order);
        Task<List<Order>> DeleteOrder(int id);
    }
}

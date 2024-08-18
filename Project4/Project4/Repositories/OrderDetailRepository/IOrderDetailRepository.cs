using Project4.Models;

namespace Project4.Repositories.OrderDetailRepository
{
    public interface IOrderDetailRepository
    {
        Task<List<OrderDetail>> GetOrderDetails();
        Task<OrderDetail> GetOrderDetail(int id);
        Task<List<OrderDetail>> PostOrderDetail(OrderDetail orderDetail);
        Task<List<OrderDetail>> PutOrderDetail(int id, OrderDetail orderDetail);
        Task<List<OrderDetail>> DeleteOrderDetail(int id);
    }
}

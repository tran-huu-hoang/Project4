using Project4.Models;

namespace Project4.Services.OrderDetailService
{
    public interface IOrderDetailService
    {
        Task<List<OrderDetail>> GetOrderDetails();
        Task<OrderDetail> GetOrderDetail(int id);
        Task<List<OrderDetail>> PostOrderDetail(OrderDetail orderDetail);
        Task<List<OrderDetail>> PutOrderDetail(int id, OrderDetail orderDetail);
        Task<List<OrderDetail>> DeleteOrderDetail(int id);
    }
}

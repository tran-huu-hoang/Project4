using Project4.Models;
using Project4.Repositories.OrderDetailRepository;
using Project4.Repositories.UsersRepository;

namespace Project4.Services.OrderDetailService
{
    public class OrderDetailService : IOrderDetailService
    {
        private readonly IOrderDetailRepository _orderDetailRepository;

        public OrderDetailService(IOrderDetailRepository orderDetailRepository)
        {
            _orderDetailRepository = orderDetailRepository;
        }


        public async Task<List<OrderDetail>> GetOrderDetails()
        {
            return await _orderDetailRepository.GetOrderDetails();
        }
        public async Task<OrderDetail> GetOrderDetail(int id)
        {
            return await _orderDetailRepository.GetOrderDetail(id);
        }

        public async Task<List<OrderDetail>> PostOrderDetail(OrderDetail orderDetail)
        {
            return await _orderDetailRepository.PostOrderDetail(orderDetail);
        }

        public async Task<List<OrderDetail>> PutOrderDetail(int id, OrderDetail orderDetail)
        {
            return await _orderDetailRepository.PutOrderDetail(id, orderDetail);
        }
        public async Task<List<OrderDetail>> DeleteOrderDetail(int id)
        {
            return await _orderDetailRepository.DeleteOrderDetail(id);
        }
    }
}

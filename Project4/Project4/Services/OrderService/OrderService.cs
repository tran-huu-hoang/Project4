using Project4.Models;
using Project4.Repositories.OrderRepository;
using Project4.Repositories.UsersRepository;

namespace Project4.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }


        public async Task<List<Order>> GetOrders()
        {
            return await _orderRepository.GetOrders();
        }
        public async Task<Order> GetOrder(int id)
        {
            return await _orderRepository.GetOrder(id);
        }

        public async Task<List<Order>> PostOrder(Order order)
        {
            return await _orderRepository.PostOrder(order);
        }

        public async Task<List<Order>> PutOrder(int id, Order order)
        {
            return await _orderRepository.PutOrder(id, order);
        }
        public async Task<List<Order>> DeleteOrder(int id)
        {
            return await _orderRepository.DeleteOrder(id);
        }
    }
}

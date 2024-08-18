using Microsoft.EntityFrameworkCore;
using Project4.Models;

namespace Project4.Repositories.OrderRepository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly MockProject4DbContext _context;

        public OrderRepository(MockProject4DbContext context)
        {
            _context = context;
        }


        public async Task<List<Order>> GetOrders()
        {
            return await _context.Orders.ToListAsync();
        }
        public async Task<Order> GetOrder(int id)
        {
            return await _context.Orders.FindAsync(id);
        }

        public async Task<List<Order>> PostOrder(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return await _context.Orders.ToListAsync();
        }

        public async Task<List<Order>> PutOrder(int id, Order order)
        {
            _context.Orders.Update(order);

            await _context.SaveChangesAsync();

            return await _context.Orders.ToListAsync();
        }
        public async Task<List<Order>> DeleteOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return await _context.Orders.ToListAsync();
        }
    }
}

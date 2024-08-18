using Microsoft.EntityFrameworkCore;
using Project4.Models;

namespace Project4.Repositories.OrderDetailRepository
{
    public class OrderDetailRepository : IOrderDetailRepository
    {
        private readonly MockProject4DbContext _context;

        public OrderDetailRepository(MockProject4DbContext context)
        {
            _context = context;
        }


        public async Task<List<OrderDetail>> GetOrderDetails()
        {
            return await _context.OrderDetails.ToListAsync();
        }
        public async Task<OrderDetail> GetOrderDetail(int id)
        {
            return await _context.OrderDetails.FindAsync(id);
        }

        public async Task<List<OrderDetail>> PostOrderDetail(OrderDetail orderDetail)
        {
            _context.OrderDetails.Add(orderDetail);
            await _context.SaveChangesAsync();

            return await _context.OrderDetails.ToListAsync();
        }

        public async Task<List<OrderDetail>> PutOrderDetail(int id, OrderDetail orderDetail)
        {
            _context.OrderDetails.Update(orderDetail);

            await _context.SaveChangesAsync();

            return await _context.OrderDetails.ToListAsync();
        }
        public async Task<List<OrderDetail>> DeleteOrderDetail(int id)
        {
            var orderDetail = await _context.OrderDetails.FindAsync(id);

            _context.OrderDetails.Remove(orderDetail);
            await _context.SaveChangesAsync();

            return await _context.OrderDetails.ToListAsync();
        }
    }
}

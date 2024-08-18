using Microsoft.EntityFrameworkCore;
using Project4.Models;

namespace Project4.Repositories.UsersRepository
{
    public class UsersRepository : IUsersRepository
    {
        private readonly MockProject4DbContext _context;

        public UsersRepository(MockProject4DbContext context)
        {
            _context = context;
        }


        public async Task<List<User>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }
        public async Task<User> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<List<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return await _context.Users.ToListAsync();
        }

        public async Task<List<User>> PutUser(int id, User user)
        {
            _context.Users.Update(user);

            await _context.SaveChangesAsync();

            return await _context.Users.ToListAsync();
        }
        public async Task<List<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return await _context.Users.ToListAsync();
        }
    }
}

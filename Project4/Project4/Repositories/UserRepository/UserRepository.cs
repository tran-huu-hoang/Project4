using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Project4.Models;
using Project4.ViewModels;

namespace Project4.Repositories.UserRepository
{
    public class UserRepository : IUserRepository
    {
        private readonly MockProject4DbContext _context;

        public UserRepository(MockProject4DbContext context)
        {
            _context = context;
        }

        public async Task<User?> GetById(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<User?> GetByEmail(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(e => e.Email == email);
        }
        public async Task<User?> Create(RegisterViewModel registerViewModel)
        {
            string sql = "execute proc_register_user @fullname, @userphone, @email, @password, @address, @roleid";
            IEnumerable<User?> result = await _context.Users.FromSqlRaw(sql,
                new SqlParameter("@fullname", registerViewModel.FullName ?? ""),
                new SqlParameter("@userphone", ""),
                new SqlParameter("@email", registerViewModel.Email ?? ""),
                new SqlParameter("@password", registerViewModel.Password ?? ""),
                new SqlParameter("@address", ""),
                new SqlParameter("@roleid", 1)).ToListAsync();

            User? user = result.FirstOrDefault();
            return user;
        }
    }
}

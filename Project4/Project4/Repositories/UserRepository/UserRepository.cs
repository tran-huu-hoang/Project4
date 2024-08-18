using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Project4.Models;
using Project4.ViewModels;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;

namespace Project4.Repositories.UserRepository
{
    public class UserRepository : IUserRepository
    {
        private readonly MockProject4DbContext _context;
        private readonly IConfiguration _config;

        public UserRepository(MockProject4DbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
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

        public async Task<string> Login(LoginViewModel loginViewModel)
        {
            string sql = "execute proc_check_login @email, @password";
            IEnumerable<User?> result = await _context.Users.FromSqlRaw(sql,
                new SqlParameter("@email", loginViewModel.Email),
                new SqlParameter("@password", loginViewModel.Password)).ToListAsync();

            User? user = result.FirstOrDefault();

            if(user != null)
            {
                //xác thực thành công sẽ tạo JWT
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_config["Jwt:SecretKey"] ?? "");
                var tokenDecriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    }),
                    Expires = DateTime.UtcNow.AddDays(30),
                    /*SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256),*/
                };
                var token = tokenHandler.CreateToken(tokenDecriptor);
                var jwtToken = tokenHandler.WriteToken(token);

                return jwtToken;
            }
            else
            {
                throw new Exception("Wrong email or pasword");
            }
        }
    }
}

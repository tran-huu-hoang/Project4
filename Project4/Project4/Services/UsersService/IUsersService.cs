using Project4.Models;

namespace Project4.Services.UsersService
{
    public interface IUsersService
    {
        Task<List<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<List<User>> PostUser(User user);
        Task<List<User>> PutUser(int id, User user);
        Task<List<User>> DeleteUser(int id);
    }
}

using Project4.Models;
using Project4.Repositories.ProductRepository;
using Project4.Repositories.UsersRepository;

namespace Project4.Services.UsersService
{
    public class UsersService : IUsersService
    {
        private readonly IUsersRepository _usersRepository;

        public UsersService(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }


        public async Task<List<User>> GetUsers()
        {
            return await _usersRepository.GetUsers();
        }
        public async Task<User> GetUser(int id)
        {
            return await _usersRepository.GetUser(id);
        }

        public async Task<List<User>> PostUser(User user)
        {
            return await _usersRepository.PostUser(user);
        }

        public async Task<List<User>> PutUser(int id, User user)
        {
            return await _usersRepository.PutUser(id, user);
        }
        public async Task<List<User>> DeleteUser(int id)
        {
            return await _usersRepository.DeleteUser(id);
        }
    }
}

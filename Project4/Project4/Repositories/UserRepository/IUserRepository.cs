using Project4.Models;
using Project4.ViewModels;

namespace Project4.Repositories.UserRepository
{
    public interface IUserRepository
    {
        Task<User?> GetById(int id);
        Task<User?> GetByEmail(string email);
        Task<User?> Create(RegisterViewModel registerViewModel);
    }
}

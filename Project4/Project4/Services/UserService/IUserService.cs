using Project4.Models;
using Project4.ViewModels;

namespace Project4.Services.UserService
{
    public interface IUserService
    {
        Task<User?> Register(RegisterViewModel registerViewModel);
    }
}

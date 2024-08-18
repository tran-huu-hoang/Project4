using Project4.Models;
using Project4.Repositories.UserRepository;
using Project4.ViewModels;

namespace Project4.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User?> Register(RegisterViewModel registerViewModel)
        {
            var existingUserByEmail = await _userRepository.GetByEmail(registerViewModel.Email ?? "");
            if (existingUserByEmail != null)
            {
                throw new ArgumentException("Email đã tồn tại");
            }

            //thực hiện thêm mới user
            return await _userRepository.Create(registerViewModel);
        }

        public async Task<string> Login(LoginViewModel loginViewModel)
        {
            //thực hiện đăng nhập
            return await _userRepository.Login(loginViewModel);
        }
    }
}

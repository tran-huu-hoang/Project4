using Microsoft.EntityFrameworkCore;
using Project4.Models;
using Project4.Repositories.CategoryRepository;
using Project4.Services.CategoryService;
using Project4.Repositories.SupplierRepository;
using Project4.Services.SupplierService;
using Project4.Repositories.ProductRepository;
using Project4.Services.ProductService;
using Project4.Repositories.UserRepository;
using Project4.Services.UserService;
using Project4.Repositories.RateRepository;
using Project4.Services.RateService;
using Project4.Repositories.FavouriteProductRepository;
using Project4.Services.FavouriteProductService;
using Project4.Repositories.UsersRepository;
using Project4.Services.UsersService;
using Project4.Repositories.OrderRepository;
using Project4.Services.OrderService;
using Project4.Repositories.OrderDetailRepository;
using Project4.Services.OrderDetailService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

//Cau hinh ket noi
var configuration = builder.Configuration;
var connectionString = builder.Configuration.GetConnectionString("AppConnection");
builder.Services.AddDbContext<MockProject4DbContext>(x => x.UseSqlServer(connectionString));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<ISupplierRepository, SupplierRepository>();
builder.Services.AddScoped<ISupplierService, SupplierService>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IRateRepository, RateRepository>();
builder.Services.AddScoped<IRateService, RateService>();
builder.Services.AddScoped<IFavouriteProductRepository, FavouriteProductRepository>();
builder.Services.AddScoped<IFavouriteProductService, FavouriteProductService>();
builder.Services.AddScoped<IUsersRepository, UsersRepository>();
builder.Services.AddScoped<IUsersService, UsersService>();
builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IOrderDetailRepository, OrderDetailRepository>();
builder.Services.AddScoped<IOrderDetailService, OrderDetailService>();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
});
/*.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "",
        ValidAudience = "",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(""))
    };
});*/

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAllOrigins");

app.UseAuthorization();

app.UseAuthentication();

app.MapControllers();

app.Run();

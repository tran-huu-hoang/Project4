using System;
using System.Collections.Generic;

namespace Project4.Models;

public partial class User
{
    public int Id { get; set; }

    public string? FullName { get; set; }

    public string? AvatarUrl { get; set; }

    public string? UserPhone { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public DateTime? CreateDate { get; set; }

    public bool? IsDelete { get; set; }

    public string? Address { get; set; }

    public bool? RoleId { get; set; }

    public virtual ICollection<FavouriteProduct> FavouriteProducts { get; set; } = new List<FavouriteProduct>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual ICollection<Rate> Rates { get; set; } = new List<Rate>();
}

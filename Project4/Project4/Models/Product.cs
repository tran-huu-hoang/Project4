using System;
using System.Collections.Generic;

namespace Project4.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? ProductName { get; set; }

    public string? Image { get; set; }

    public string? Description { get; set; }

    public bool? Status { get; set; }

    public int? Sid { get; set; }

    public int? Cid { get; set; }

    public int? Quantity { get; set; }

    public double? Price { get; set; }

    public double? SalePrice { get; set; }

    public double? Rate { get; set; }

    public virtual Category? CidNavigation { get; set; }

    public virtual ICollection<FavouriteProduct> FavouriteProducts { get; set; } = new List<FavouriteProduct>();

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual ICollection<Rate> Rates { get; set; } = new List<Rate>();

    public virtual Supplier? SidNavigation { get; set; }
}

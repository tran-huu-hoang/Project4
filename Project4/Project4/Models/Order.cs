using System;
using System.Collections.Generic;

namespace Project4.Models;

public partial class Order
{
    public int Id { get; set; }

    public int? Uid { get; set; }

    public DateTime? CreateDate { get; set; }

    public int? Status { get; set; }

    public double? TotalMoney { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual User? UidNavigation { get; set; }
}

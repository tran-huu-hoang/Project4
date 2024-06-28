using System;
using System.Collections.Generic;

namespace Project4.Models;

public partial class OrderDetail
{
    public int Id { get; set; }

    public int? Oid { get; set; }

    public int? Quantity { get; set; }

    public int? Pid { get; set; }

    public double? Total { get; set; }

    public double? Price { get; set; }

    public virtual Order? OidNavigation { get; set; }

    public virtual Product? PidNavigation { get; set; }
}

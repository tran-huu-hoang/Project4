using System;
using System.Collections.Generic;

namespace Project4.Models;

public partial class FavouriteProduct
{
    public int Id { get; set; }

    public int? Pid { get; set; }

    public int? Uid { get; set; }

    public virtual Product? PidNavigation { get; set; }

    public virtual User? UidNavigation { get; set; }
}

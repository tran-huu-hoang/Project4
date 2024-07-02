using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Project4.Models;

public partial class MockProject4DbContext : DbContext
{
    public MockProject4DbContext()
    {
    }

    public MockProject4DbContext(DbContextOptions<MockProject4DbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<FavouriteProduct> FavouriteProducts { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderDetail> OrderDetails { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Rate> Rates { get; set; }

    public virtual DbSet<Supplier> Suppliers { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=ADMIN; Database=Mock_Project4_db; uid=sa; pwd=sa123; MultipleActiveResultSets=True;TrustServercertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.Property(e => e.Name).HasMaxLength(150);
        });

        modelBuilder.Entity<FavouriteProduct>(entity =>
        {
            entity.ToTable("Favourite_product");

            entity.HasOne(d => d.PidNavigation).WithMany(p => p.FavouriteProducts)
                .HasForeignKey(d => d.Pid)
                .HasConstraintName("FK_Favourite_product_Products");

            entity.HasOne(d => d.UidNavigation).WithMany(p => p.FavouriteProducts)
                .HasForeignKey(d => d.Uid)
                .HasConstraintName("FK_Favourite_product_Users");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.Property(e => e.CreateDate)
                .HasColumnType("datetime")
                .HasColumnName("Create_Date");
            entity.Property(e => e.TotalMoney).HasColumnName("Total_Money");

            entity.HasOne(d => d.UidNavigation).WithMany(p => p.Orders)
                .HasForeignKey(d => d.Uid)
                .HasConstraintName("FK_Orders_Users");
        });

        modelBuilder.Entity<OrderDetail>(entity =>
        {
            entity.ToTable("Order_Details");

            entity.HasOne(d => d.OidNavigation).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.Oid)
                .HasConstraintName("FK_Order_Details_Orders");

            entity.HasOne(d => d.PidNavigation).WithMany(p => p.OrderDetails)
                .HasForeignKey(d => d.Pid)
                .HasConstraintName("FK_Order_Details_Products");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.Property(e => e.Image).HasMaxLength(250);
            entity.Property(e => e.ProductName)
                .HasMaxLength(150)
                .HasColumnName("Product_Name");
            entity.Property(e => e.SalePrice).HasColumnName("Sale_Price");

            entity.HasOne(d => d.CidNavigation).WithMany(p => p.Products)
                .HasForeignKey(d => d.Cid)
                .HasConstraintName("FK_Products_Categories");

            entity.HasOne(d => d.SidNavigation).WithMany(p => p.Products)
                .HasForeignKey(d => d.Sid)
                .HasConstraintName("FK_Products_Suppliers");
        });

        modelBuilder.Entity<Rate>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_Rate_1");

            entity.ToTable("Rate");

            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.Rate1).HasColumnName("Rate");

            entity.HasOne(d => d.PidNavigation).WithMany(p => p.Rates)
                .HasForeignKey(d => d.Pid)
                .HasConstraintName("FK_Rate_Products");

            entity.HasOne(d => d.UidNavigation).WithMany(p => p.Rates)
                .HasForeignKey(d => d.Uid)
                .HasConstraintName("FK_Rate_Users");
        });

        modelBuilder.Entity<Supplier>(entity =>
        {
            entity.Property(e => e.Name).HasMaxLength(150);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasIndex(e => e.Email, "UQ__Users__A9D10534575EB960").IsUnique();

            entity.HasIndex(e => e.Email, "UQ__Users__A9D10534AA35B008").IsUnique();

            entity.Property(e => e.AvatarUrl).HasColumnName("Avatar_Url");
            entity.Property(e => e.CreateDate)
                .HasColumnType("datetime")
                .HasColumnName("Create_Date");
            entity.Property(e => e.Email).HasMaxLength(150);
            entity.Property(e => e.FullName)
                .HasMaxLength(250)
                .HasColumnName("Full_Name");
            entity.Property(e => e.IsDelete).HasColumnName("Is_Delete");
            entity.Property(e => e.Password).IsUnicode(false);
            entity.Property(e => e.RoleId).HasColumnName("Role_id");
            entity.Property(e => e.UserPhone)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("User_Phone");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

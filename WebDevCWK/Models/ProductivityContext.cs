using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.General;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace WebDevCWK.Models;

public class ProductivityContext:IdentityDbContext<IdentityUser>
{
    public ProductivityContext(DbContextOptions<ProductivityContext> options):base(options)
    {}

    public DbSet<Users> Users {get;set;}
    public DbSet<UserRoles> UserRoles {get;set;}
    public DbSet<Teams> Teams {get;set;}
    public DbSet<Projects> Projects {get;set;}
    public DbSet<Tasks> Tasks {get;set;}
    public DbSet<Milestones> Milestones {get;set;}
}
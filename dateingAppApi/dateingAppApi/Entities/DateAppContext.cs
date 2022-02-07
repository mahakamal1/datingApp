namespace dateingAppApi.Entities;

    public class DateAppContext : DbContext
    {
        public DateAppContext(DbContextOptions options) : base(options)
        { 
            
        
        }
            public DbSet<AppUser> Users { get; set; } 


        //FLUENT API
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppUser>()
                .Property(user => user.UserName)
                .IsRequired();
        }
    }


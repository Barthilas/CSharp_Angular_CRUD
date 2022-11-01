using Microsoft.EntityFrameworkCore;

namespace SuperHero_API.Data
{
    public class DataContext : DbContext
    {
        //Prevent error: Unable to create an object of type 'DataContext'
        public DataContext()
        {

        }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
            optionsBuilder.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
        }

        public DbSet<SuperHero> SuperHeroes => Set<SuperHero>();
    }
}

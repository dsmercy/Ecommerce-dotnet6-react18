using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Data;
using VeggiFoodAPI.Data;
using VeggiFoodAPI.Models.DTOs;
using Microsoft.Extensions.DependencyInjection;
using VeggiFoodAPI.Logger;
using VeggiFoodAPI.Services;
using VeggiFoodAPI.RequestHelpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using log4net.Config;
using log4net;
using System.Reflection;
using Microsoft.AspNetCore.Authorization;
using VeggieFood.REPOSITORY.Repository;
using VeggieFood.Repository.Repository.Interfaces;
using VeggieFood.Repository.Repository;

namespace VeggiFoodAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            AddServices(builder);// Add services to the container.

            var app = builder.Build();
            ConfigureRequestPipeline(app); // Configure the HTTP request pipeline.

            //SeedDatabase(app); //Seed initial database

            app.Run();
        }

        private static void AddServices(WebApplicationBuilder builder)
        {
            // start logger configuration
            var logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
            // End logger configuration

            // Repositories
            builder.Services.AddTransient<IDapperGenericRepository, DapperGenericRepository>();
            builder.Services.AddTransient(typeof(IGenericRepository<>), typeof(GenericRepository<>));


            builder.Services.AddControllers()
                .ConfigureApiBehaviorOptions(options =>
                {
                    // Disable default 400 Bad Request behavior
                    options.SuppressMapClientErrors = true;
                    options.SuppressModelStateInvalidFilter = true;
                });
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<TokenService>();
            builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            builder.Services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'VeggiFoodContext' not found.")));

            builder.Services.AddIdentityCore<ApplicationUser>(options =>
            {
                options.SignIn.RequireConfirmedEmail = false;
                options.User.RequireUniqueEmail = true;
                options.SignIn.RequireConfirmedPhoneNumber = false;
                options.SignIn.RequireConfirmedAccount = false;
                options.Password.RequireDigit = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 2;
                options.Password.RequireLowercase = false;
            })
              .AddRoles<ApplicationRole>()
              .AddEntityFrameworkStores<ApplicationDbContext>();


            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(opt =>
                {
                    opt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
                            .GetBytes(builder.Configuration["JWTSettings:TokenKey"]))
                    };
                });
            builder.Services.AddAuthorization();
            builder.Services.AddScoped<ImageService>();

        }

        private static void ConfigureRequestPipeline(WebApplication app)
        {
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            //app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("corsapp");
            app.UseDefaultFiles();
            app.UseStaticFiles();


            app.UseCors(builder => builder
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .SetIsOriginAllowed((host) => true)
                        .AllowCredentials());
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseMiddleware<ExceptionHandler>();

            app.MapControllers();

            app.Run();
        }
    }
}

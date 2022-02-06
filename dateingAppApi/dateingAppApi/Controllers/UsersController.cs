using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dateingAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DateAppContext _context;
        public UsersController(DateAppContext context)
        {
            _context = context; 
        }

        [HttpGet]
        public async Task<IEnumerable<AppUser>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<AppUser> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}

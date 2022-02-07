namespace dateingAppApi.Controllers;

    public class UsersController : BaseApiController
    {
        private readonly DateAppContext _context;
        public UsersController(DateAppContext context)
        {
            _context = context; 
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }


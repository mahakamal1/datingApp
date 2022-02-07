namespace dateingAppApi.Controllers;

    public class AccountController : BaseApiController
    {
        private readonly DateAppContext _context;
        private readonly ITokenService _tokenService;

        public AccountController(DateAppContext context ,ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register([FromBody] RegisterDTO registerDTO)
        {
            if(await UserExists(registerDTO.UserName)) return BadRequest("UserName Has been taken before");
            HMACSHA512 hMACSHA512 = new HMACSHA512();
            AppUser USER = new AppUser()
            {
                UserName = registerDTO.UserName.ToLower(),
                PasswordHash = hMACSHA512.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
                PasswordSalt = hMACSHA512.Key
            };
            _context.Users.Add(USER);
            await _context.SaveChangesAsync();
            return new UserDTO
            {
                UserName=registerDTO.UserName,
                Token = _tokenService.CreateToken(USER)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDTO.UserName);
            if (user == null) return Unauthorized("username is not correct");
            HMACSHA512 hMACSHA512 = new HMACSHA512(user.PasswordSalt);
            var computedHash = hMACSHA512.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.Password));
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("password is wrong");
            }
            return new UserDTO
            {
                UserName = loginDTO.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }



        //to make sure that 2 users don't have the same name
        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
    }


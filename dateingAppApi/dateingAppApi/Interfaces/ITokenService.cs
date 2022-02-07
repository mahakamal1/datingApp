namespace dateingAppApi.Interfaces;

    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }


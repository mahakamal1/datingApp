namespace dateingAppApi.Entities;

    public class AppUser
    {
        
        public int Id { get; set; }
        [MaxLength(8)]
        [type: nvarchar(10)]
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }


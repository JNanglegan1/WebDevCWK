using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebDevCWK.Models;

public class UserRoles
{
    [JsonIgnore]
    [Key]
    public int UserRoleID{get;set;}
    [Required]
    public string? UserRoleName{get;set;}

    //FK
    public int UserID {get;set;}
    public Users? Users {get;set;}
}
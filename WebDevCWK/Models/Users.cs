using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebDevCWK.Models;

public class Users
{
    [JsonIgnore]
    [Key]
    public int UserID {get;set;}
    [Required]
    public string? UserName{get;set;}

    //FK
    public List<UserRoles>? UserRoles {get;set;}
    public List<Tasks>? Tasks {get;set;}
    public List<Teams>? Teams {get;set;}
}
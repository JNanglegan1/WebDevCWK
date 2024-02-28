using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebDevCWK.Models;

public class Teams
{
    [JsonIgnore]
    [Key]
    public int TeamID {get;set;}
    [Required]
    public string? TeamName {get;set;}

    //FK
    public List<Users>? Users {get;set;}
    public int ProjectID {get;set;}
    public Projects? Projects {get;set;}
}
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebDevCWK.Models;

public class Projects
{
    [JsonIgnore]
    [Key]
    public int ProjectID {get;set;}
    [Required]
    public string? ProjectName {get;set;}
    public string? ProjectDescription {get;set;}
    public DateTime? ProjectDueDate {get;set;}
    public string? ProjectStatus {get;set;}

    //FK
    public List<Milestones>? Milestones {get;set;}
}
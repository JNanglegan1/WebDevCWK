using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebDevCWK.Models;

public class Milestones
{
    [JsonIgnore]
    [Key]
    public int MilestoneID {get;set;}
    [Required]
    public string? MilestoneName {get;set;}
    public string? MilestoneDescription {get;set;}
    public DateTime MilestoneDueDate {get;set;}
    public string? Status {get;set;}

    //FK
    [Required]
    public int ProjectID { get; set; }
    public Projects? Project { get; set; }
}
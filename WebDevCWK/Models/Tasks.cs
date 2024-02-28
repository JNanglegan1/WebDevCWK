using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebDevCWK.Models;

public class Tasks
{
    [JsonIgnore]
    [Key]
    public int TaskID {get;set;}
    [Required]
    public string? TaskName {get;set;}
    public string? TaskDescription {get;set;}
    public DateTime? TaskDueDate {get;set;}
    public string? TaskStatus {get;set;}

    //FK
    public int UserID {get;set;}
    public Users? Users {get;set;}
}
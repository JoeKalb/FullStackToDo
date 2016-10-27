using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ToDoList.API.Models
{
    public class ToDoListEntry
    {
        // primary key
        [Key]
        public int ToDoEntryID { get; set; }

        // additional columns
        public string Info { get; set; }
        public int Rank { get; set; }
    }
}
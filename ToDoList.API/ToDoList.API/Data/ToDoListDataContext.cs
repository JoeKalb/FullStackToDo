using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using ToDoList.API.Models;

namespace ToDoList.API.Data
{
    public class ToDoListDataContext : DbContext
    {
        public ToDoListDataContext() : base("ToDoList")
        {

        }
        
        public IDbSet<ToDoListEntry> ToDoListEntries { get; set; }
    }
}
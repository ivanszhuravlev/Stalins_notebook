using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Stalins_notebook.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base("Contacts")
        { }
        public DbSet<ContactsModel> Contacts { get; set; }

    }
}
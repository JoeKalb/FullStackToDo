namespace ToDoList.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ToDoListEntries",
                c => new
                    {
                        ToDoEntryID = c.Int(nullable: false, identity: true),
                        Info = c.String(),
                        Rank = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ToDoEntryID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ToDoListEntries");
        }
    }
}

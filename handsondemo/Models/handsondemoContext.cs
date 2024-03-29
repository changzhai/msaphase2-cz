﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace handsondemo.Models
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]

    public class handsondemoContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public class MyConfiguration : DbMigrationsConfiguration<handsondemoContext>
        {
            public MyConfiguration()
            {
                // enable migrations so db knows how to update based on model
                this.AutomaticMigrationsEnabled = true;

                this.AutomaticMigrationDataLossAllowed = true;
            }


            // Seed datebase with dummy data
            protected override void Seed(handsondemoContext context)
            {
                var students = new List<Student>
                {
                    new Student { FirstName = "Carson",   LastName = "Alexander",
                        EnrollmentDate = DateTime.Parse("2010-09-01") },
                    new Student { FirstName = "Meredith", LastName = "Alonso",
                        EnrollmentDate = DateTime.Parse("2012-09-01") },
                    new Student { FirstName = "Arturo",   LastName = "Anand",
                        EnrollmentDate = DateTime.Parse("2013-09-01") },
                    new Student { FirstName = "Gytis",    LastName = "Barzdukas",
                        EnrollmentDate = DateTime.Parse("2012-09-01") },
                    new Student { FirstName = "Yan",      LastName = "Li",
                        EnrollmentDate = DateTime.Parse("2012-09-01") },
                    new Student { FirstName = "Peggy",    LastName = "Justice",
                        EnrollmentDate = DateTime.Parse("2011-09-01") },
                    new Student { FirstName = "Laura",    LastName = "Norman",
                        EnrollmentDate = DateTime.Parse("2013-09-01") },
                    new Student { FirstName = "Nino",     LastName = "Olivetto",
                        EnrollmentDate = DateTime.Parse("2005-08-11")}
                };
                students.ForEach(s => context.Students.AddOrUpdate(p => p.LastName, s));
                context.SaveChanges();

                var courses = new List<Course>
                {
                    new Course {CourseID = 1050, Title = "Chemistry",      Credits = 3, Description = "The study of how the world works at the molecular level."},
                    new Course {CourseID = 4022, Title = "Microeconomics", Credits = 3, Description = "Economics, but smaller", },
                    new Course {CourseID = 4041, Title = "Macroeconomics", Credits = 3, Description = "Economics, but bigger", },
                    new Course {CourseID = 1045, Title = "Calculus",       Credits = 4, Description = "The maths of how things change with respect to each other. Invented by Newton.", },
                    new Course {CourseID = 3141, Title = "Trigonometry",   Credits = 4, Description = "The maths of angles", },
                    new Course {CourseID = 2021, Title = "Composition",    Credits = 3, Description = "Composition. Music or art?", },
                    new Course {CourseID = 2042, Title = "Literature",     Credits = 4, Description = "Shakespeare and co", }
                };
                courses.ForEach(s => context.Courses.AddOrUpdate(p => p.Title, s));
                context.SaveChanges();

                var enrollments = new List<Enrollment>
                {
                    new Enrollment {
                        StudentID = students.Single(s => s.LastName == "Alexander").ID,
                        CourseID = courses.Single(c => c.Title == "Chemistry" ).CourseID,
                        Grade = Grade.A
                    },
                     new Enrollment {
                        StudentID = students.Single(s => s.LastName == "Alexander").ID,
                        CourseID = courses.Single(c => c.Title == "Microeconomics" ).CourseID,
                        Grade = Grade.C
                     },
                     new Enrollment {
                        StudentID = students.Single(s => s.LastName == "Alexander").ID,
                        CourseID = courses.Single(c => c.Title == "Macroeconomics" ).CourseID,
                        Grade = Grade.B
                     },
                     new Enrollment {
                         StudentID = students.Single(s => s.LastName == "Alonso").ID,
                        CourseID = courses.Single(c => c.Title == "Calculus" ).CourseID,
                        Grade = Grade.B
                     },
                     new Enrollment {
                         StudentID = students.Single(s => s.LastName == "Alonso").ID,
                        CourseID = courses.Single(c => c.Title == "Trigonometry" ).CourseID,
                        Grade = Grade.B
                     },
                     new Enrollment {
                        StudentID = students.Single(s => s.LastName == "Alonso").ID,
                        CourseID = courses.Single(c => c.Title == "Composition" ).CourseID,
                        Grade = Grade.B
                     },
                     new Enrollment {
                        StudentID = students.Single(s => s.LastName == "Anand").ID,
                        CourseID = courses.Single(c => c.Title == "Chemistry" ).CourseID
                     },
                     new Enrollment {
                        StudentID = students.Single(s => s.LastName == "Anand").ID,
                        CourseID = courses.Single(c => c.Title == "Microeconomics").CourseID,
                        Grade = Grade.B
                     },
                    new Enrollment {
                        StudentID = students.Single(s => s.LastName == "Barzdukas").ID,
                        CourseID = courses.Single(c => c.Title == "Chemistry").CourseID,
                        Grade = Grade.B
                     },
                     new Enrollment {
                        StudentID = students.Single(s => s.LastName == "Li").ID,
                        CourseID = courses.Single(c => c.Title == "Composition").CourseID,
                        Grade = Grade.B
                     },
                     new Enrollment {
                        StudentID = students.Single(s => s.LastName == "Justice").ID,
                        CourseID = courses.Single(c => c.Title == "Literature").CourseID,
                        Grade = Grade.B
                     }
                };

                foreach (Enrollment e in enrollments)
                {
                    var enrollmentInDataBase = context.Enrollments.Where(
                        s =>
                             s.Student.ID == e.StudentID &&
                             s.Course.CourseID == e.CourseID).SingleOrDefault();
                    if (enrollmentInDataBase == null)
                    {
                        context.Enrollments.Add(e);
                    }
                }
                context.SaveChanges();
            }
        }

        public handsondemoContext() : base("name=handsondemoContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<handsondemoContext, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<Student> Students { get; set; }

        public System.Data.Entity.DbSet<handsondemo.Models.Course> Courses { get; set; }

        public System.Data.Entity.DbSet<handsondemo.Models.Enrollment> Enrollments { get; set; }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded and ready to go!");
    loadStudents();
    loadCourses();
    loadEnrollments();
});

function loadStudents() {
    StudentModule.getStudents(function (studentsList) {
        setupStudentsTable(studentsList);
    })

    function setupStudentsTable(studentsList) {
        var studentTable = document.getElementById("studentsList");
        var studentIDList = document.getElementById("studentidList")
        console.log(studentsList);

        for (i = 0; i < studentsList.length; i++) {
            var row = document.createElement("tr");

            var studentnamecol = document.createElement("option");
            studentnamecol.innerHTML = studentsList[i].FirstName + " " + studentsList[i].LastName;
            studentnamecol.value = studentsList[i].FirstName + " " + studentsList[i].LastName;
            studentnamecol.ID = studentsList[i].ID;
            studentIDList.appendChild(studentnamecol);

            var firstnamecol = document.createElement("td");
            firstnamecol.innerHTML = studentsList[i].FirstName;
            firstnamecol.id = "fname"+studentsList[i].ID;
            row.appendChild(firstnamecol);

            var lastnamecol = document.createElement("td");
            lastnamecol.innerHTML = studentsList[i].LastName;
            lastnamecol.id = "lname"+studentsList[i].ID;
            row.appendChild(lastnamecol);

            var enrollmentdatecol = document.createElement("td");
            enrollmentdatecol.innerHTML = studentsList[i].EnrollmentDate;
            enrollmentdatecol.id = "enrollmentdate"+studentsList[i].ID;
            row.appendChild(enrollmentdatecol);

            var editcol = document.createElement("td");
            editcol.innerHTML =
                '<input class="edit" type="button" value="Edit" />' +
                '<input class="save" type="button" value="Save" />' +
                '<input class="cancel" type="button" value="Cancel" />';
            editcol.id = "edit"+studentsList[i].ID;
            row.appendChild(editcol);

            // Append our rows to the table
            studentTable.appendChild(row);
        }
    }
}

function loadCourses() {
    CourseModule.getCourses(function (coursesList) {
        setupCoursesTable(coursesList);
    })

    function setupCoursesTable(coursesList) {
        var courseTable = document.getElementById("coursesList");
        var courseIDList = document.getElementById("courseidList");
        console.log(coursesList);

        for (i = 0; i < coursesList.length; i++) {

            var row = document.createElement("tr");

            var courseIDcol = document.createElement("td");
            courseIDcol.innerHTML = coursesList[i].CourseID;
            row.appendChild(courseIDcol);

            var currentcourseID = document.createElement("option");
            currentcourseID.innerHTML = coursesList[i].Title;
            currentcourseID.value = coursesList[i].Title;
            currentcourseID.ID = coursesList[i].CourseID;
            courseIDList.appendChild(currentcourseID);

            var titleCol = document.createElement("td");
            titleCol.innerHTML = coursesList[i].Title;
            row.appendChild(titleCol);

            var creditsCol = document.createElement("td");
            creditsCol.innerHTML = coursesList[i].Credits;
            row.appendChild(creditsCol);

            // Append our rows to the table
            courseTable.appendChild(row);
        }
    }
}

function loadEnrollments() {
    EnrollmentModule.getEnrollments(function (enrollmentsList) {
        setupEnrollmentsTable(enrollmentsList);
    })

    function setupEnrollmentsTable(enrollmentsList) {
        var enrollmentsTable = document.getElementById("enrollmentsList");
        console.log(enrollmentsList);

        for (i = 0; i < enrollmentsList.length; i++) {

            var row = document.createElement("tr");

            var EnrollmentIDcol = document.createElement("td");
            EnrollmentIDcol.innerHTML = enrollmentsList[i].EnrollmentID;
            row.appendChild(EnrollmentIDcol);

            var CourseIDCol = document.createElement("td");
            CourseIDCol.innerHTML = enrollmentsList[i].CourseID;
            row.appendChild(CourseIDCol);

            var StudentIDcol = document.createElement("td");
            StudentIDcol.innerHTML = enrollmentsList[i].StudentID;
            row.appendChild(StudentIDcol);


            var Gradecol = document.createElement("td");
            Gradecol.innerHTML = enrollmentsList[i].Grade;
            row.appendChild(Gradecol);

            // Append our rows to the table
            enrollmentsTable.appendChild(row);
        }
    }
}
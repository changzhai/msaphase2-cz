document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded and ready to go!");
    loadStudents();
    loadCourses();
});

function loadStudents() {
    StudentModule.getStudents(function (studentsList) {
        setupStudentsTable(studentsList);
    })

    function setupStudentsTable(studentsList) {
        var studentTable = document.getElementById("studentsList");
        console.log(studentsList);

        for (i = 0; i < studentsList.length; i++) {
            var row = document.createElement("tr");

            var firstnamecol = document.createElement("td");
            firstnamecol.innerHTML = studentsList[i].FirstName;
            row.appendChild(firstnamecol);

            var lastnamecol = document.createElement("td");
            lastnamecol.innerHTML = studentsList[i].LastName;
            row.appendChild(lastnamecol);

            var enrollmentdatecol = document.createElement("td");
            enrollmentdatecol.innerHTML = studentsList[i].EnrollmentDate;
            row.appendChild(enrollmentdatecol);

            var editcol = document.createElement("td");
            editcol.innerHTML = '<button data-toggle="collapse" data-target="#edit'+i+'">Collapsible</button><div id="edit'+i+'" class="collapse">Lorem ipsum dolor text....</div>';
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
        console.log(coursesList);

        for (i = 0; i < coursesList.length; i++) {

            var row = document.createElement("tr");

            var courseIDcol = document.createElement("td");
            courseIDcol.innerHTML = coursesList[i].CourseID;
            row.appendChild(courseIDcol);

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
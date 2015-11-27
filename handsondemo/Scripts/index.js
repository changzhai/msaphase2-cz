document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded and ready to go!");
    loadStudents();
    loadCourses();
    loadEnrollments();
    loadName();
});

//tubular plugin
$('document').ready(function () {
    $('#wrapper').tubular({ videoId: 'e4Is32W-ppk', start: 3 });
    // f-UGhWj1xww cool sepia hd
    // 49SKbS7Xwf4 beautiful barn sepia
});


function loadName() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        console.log("response.name = " + response.name);
        document.getElementById('displayname').value = response.name;
    });
}

function loadStudents() {
    StudentModule.getStudents(function (studentsList) {
        setupStudentsTable(studentsList);
    })

    function setupStudentsTable(studentsList) {
        var studentTable = document.getElementById("studentsList");
        var studentIDList = document.getElementById("studentidList")
        var masterlist = document.getElementById("masterStudentList");
        masterlist = studentsList;

        var blankrow = document.createElement("option");
        blankrow.innerHTML = (" ");
        studentIDList.appendChild(blankrow);

        console.log(studentsList);

        for (i = 0; i < studentsList.length; i++) {
            var row = document.createElement("tr");

            var studentnamecol = document.createElement("option");
            studentnamecol.innerHTML = studentsList[i].FirstName + " " + studentsList[i].LastName;
            studentnamecol.value = studentsList[i].ID;
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
                '<input class="studentEdit" type="button" value="Edit" />'
            editcol.id = "edit"+studentsList[i].ID;
            row.appendChild(editcol);

            var delcol = document.createElement("td");
            delcol.innerHTML = '<input type="button" onclick="deleteStudentButton('+studentsList[i].ID+')" value="Delete">';
            delcol.id = "delstudent" + studentsList[i].ID;
            row.appendChild(delcol);

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
        var blankrow = document.createElement("option");
        blankrow.innerHTML = (" ");
        courseIDList.appendChild(blankrow);

        for (i = 0; i < coursesList.length; i++) {

            var row = document.createElement("tr");
            row.class = "RowToClick";

            var titleCol = document.createElement("td");
            titleCol.innerHTML = coursesList[i].Title;
            titleCol.id = "courseTitle" + coursesList[i].CourseID;
            titleCol.style.fontWeight = "bold";
            row.appendChild(titleCol);

            var courseIDcol = document.createElement("td");
            courseIDcol.innerHTML = coursesList[i].CourseID;
            courseIDcol.id = "course"+coursesList[i].CourseID;
            row.appendChild(courseIDcol);

            var currentcourseID = document.createElement("option");
            currentcourseID.innerHTML = coursesList[i].Title;
            currentcourseID.value = coursesList[i].CourseID;
            courseIDList.appendChild(currentcourseID);

            var creditsCol = document.createElement("td");
            creditsCol.innerHTML = coursesList[i].Credits;
            creditsCol.id = "courseCredits" + coursesList[i].CourseID;
            row.appendChild(creditsCol);

            var courseEdit = document.createElement("td");
            courseEdit.innerHTML = '<input class="courseEdit" type="button" value="Edit" />';
            courseEdit.id = "courseEditButton" + document.createElement("td");
            row.appendChild(courseEdit);

            var delcol = document.createElement("td");
            delcol.innerHTML = '<input type="button" onclick="deleteCourseButton(' + coursesList[i].CourseID + ')" value="Delete">';
            delcol.id = "delcourse" + coursesList[i].CourseID;
            row.appendChild(delcol);

            // Append our rows to the table
            courseTable.appendChild(row);

            var descriptionsrow = document.createElement("tr");

            var courseDescription = document.createElement("td");
            courseDescription.innerHTML = coursesList[i].Description;
            descriptionsrow.appendChild(courseDescription);
            descriptionsrow.id = "coursedescription" + coursesList[i].CourseID;
            courseTable.appendChild(descriptionsrow);
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

            var enrollmentEdit = document.createElement("td");
            enrollmentEdit.innerHTML = '<input class="enrollmentEdit" type="button" value="Edit" />';
            enrollmentEdit.id = "enrollmentEditButton" + document.createElement("td");
            row.appendChild(enrollmentEdit);

            var delcol = document.createElement("td");
            delcol.innerHTML = '<input type="button" onclick="deleteEnrollmentButton(' + enrollmentsList[i].EnrollmentID + ')" value="Delete">';
            delcol.id = "delenrollment" + enrollmentsList[i].EnrollmentID;
            row.appendChild(delcol);

            // Append our rows to the table
            enrollmentsTable.appendChild(row);
        }
    }
}
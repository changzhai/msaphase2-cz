document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded and ready to go!");
    loadStudents();
});

function loadStudents() {
    StudentModule.getStudents(setupStudentsTable);
}

function setupStudentsTable(studentsList) {
    var studentTable = document.getElementById("studentList");
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

        // Append our rows to the table
        studentTable.appendChild(row);
    }
}
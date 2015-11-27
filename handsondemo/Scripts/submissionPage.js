function getNewCourses() {
    var studentID = document.getElementById("studentidList").value;
    var tempCourseList = document.getElementById("tempcourseList");

    EnrollmentModule.getEnrollments(function (enrollmentsList) {
        setupEnrollmentsTable(enrollmentsList);
    })

    function setupEnrollmentsTable(enrollmentsList) {
        var enrollmentsTable = document.getElementById("enrollmentsList");
        console.log(enrollmentsList);

        for (i = 0; i < enrollmentsList.length; i++) {
            if (enrollmentsList[i].StudentID == studentID) {
                var newCourse = document.createElement("option");
                newCourse.innerHTML = enrollmentsList[i].CourseID;
                tempCourseList.appendChild(newCourse);
            }
        }
    }
}
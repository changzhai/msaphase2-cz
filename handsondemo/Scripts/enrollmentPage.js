function createEnrollmentButton() {
    var studentid = document.getElementById("enrollmentstudentid").value;
    var courseid = document.getElementById("enrollmentcourseid").value;
    var courseCredits = document.getElementById("coursecredits").value;
    var newEnrollment = {
        CourseID: courseid,
        StudentID: studentid
    }
    EnrollmentModule.addEnrollment(newEnrollment, function (callback) {
        console.log("added enrollment")
    })
};

function deleteEnrollmentButton(id) {
    EnrollmentModule.deleteEnrollment(id, function (deletedEnrollment) {
        console.log("deleted enrollment");
    })
};
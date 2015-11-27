function createCourseButton() {
    var courseTitle = document.getElementById("coursetitle").value;
    var courseDescription = document.getElementById("coursedescription").value;
    var courseCredits = document.getElementById("coursecredits").value;
    var newCourse = {
        Title: courseTitle,
        Description: courseDescription,
        Credits: courseCredits
    }
    CourseModule.addCourse(newCourse, function (callback) {
        console.log("added course")
    })
};

function deleteCourseButton(id) {
    CourseModule.deleteCourse(id, function (deletedCourse) {
        console.log("deleted course");
    })
};
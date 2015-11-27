//document.getElementById("getstudentbutton").addEventListener("click", function(){
//    console.log("button pressed");
//    getstudentbyid();
//});

function createStudentButton() {
    var currentDate = new Date().toUTCString();
    var lastname = document.getElementById("lname").value;
    var firstname = document.getElementById("fname").value;
    var newStudent = {
        LastName: lastname,
        FirstName: firstname,
        EnrollmentDate: currentDate
    }
    console.log(newStudent);
    StudentModule.addStudent(newStudent, function (returnedStudent) {
        console.log("added student");
        returnStudent(returnedStudent);
    })

    function returnStudent(returnedStudent) {
        console.log(returnedStudent);
    }

    reloadStudents();
};

function deleteStudentButton(id) {
    StudentModule.deleteStudent(id, function (deletedStudent) {
        console.log("deleted student");
        reloadStudents();
    })
};

function reloadStudents() {
    console.log("deleting students");
    $("#studentsList").html("");
    console.log("studentslist = " + studentsList);
    console.log("loading students again");
    loadStudents();
    console.log("new studentsList = " + studentsList);
}
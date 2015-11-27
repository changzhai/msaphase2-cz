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
    })

    document.getElementById("lname").value = "";
    document.getElementById("fname").value = "";

    reloadStudents();
};

function deleteStudentButton(id) {
    StudentModule.deleteStudent(id, function (deletedStudent) {
        console.log("deleted student");
        reloadStudents();
    })
};

function reloadStudents() {
    console.log("reloading students");
    $("#studentsList").html("");
    loadStudents();
}
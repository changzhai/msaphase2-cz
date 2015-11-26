document.getElementById("getstudentbutton").addEventListener("click", function(){
    console.log("button pressed");
    getstudentbyid();
});

function createStudentButton() {
    var currentDate = new Date().toString();
    var lastname = document.getElementById("lname").value;
    var firstname = document.getElementById("fname").value;
    var newStudent = {
        LastName: lastname,
        FirstName: firstname,
        EnrollmentDate: currentDate
    }
    StudentModule.addStudent(newStudent, function (callback) {
        console.log("added student")
    })
};

function getstudentbyid() {
    console.log("getstudentbyid triggered");
    var studentid = 11;
    StudentModule.getStudentById(studentid, function (studentbyID) {
        setupStudent(studentbyID);
    })
    function setupStudent(studentbyID) {
        var GottenStudent = document.getElementById("studentbyID");
        console.log(studentbyID);
    }
};
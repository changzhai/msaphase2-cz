function getNewCourses() {
    var studentID = document.getElementById("studentidList").value;
    var tempCourseList = document.getElementById("tempcourseList");
    emptyList(tempCourseList);

    EnrollmentModule.getEnrollments(function (enrollmentsList) {
        setupEnrollmentsTable(enrollmentsList);
    })

    function setupEnrollmentsTable(enrollmentsList) {

        for (i = 0; i < enrollmentsList.length; i++) {
            if (enrollmentsList[i].StudentID == studentID)
            {
                var newCourse = document.createElement("option");
                newCourse.innerHTML = enrollmentsList[i].CourseID;
                newCourse.value = enrollmentsList[i].CourseID;
                tempCourseList.appendChild(newCourse);
            }
        }
    }
}

function submitLink() {
    var link = document.getElementById("submission").value;
    var studentid = document.getElementById("studentidList").value;
    var courseid = document.getElementById("tempcourseList").value;

    console.log("link = " + link + ", studentid = " + studentid + ", courseid = " + courseid)

    EnrollmentModule.getEnrollments(function (enrollmentsList) {
        setupEnrollmentsTable(enrollmentsList);
    })

    function setupEnrollmentsTable(enrollmentsList) {
        console.log("setupenrollmentstable")
        console.log("length = " + enrollmentsList.length)

        var submissionslist = document.getElementById("submissionsList");

        for (i = 0; i < enrollmentsList.length; i++) {
            if (enrollmentsList[i].StudentID == studentid) {
                if (enrollmentsList[i].CourseID == courseid) {
                    // Adding submission to the correct enrollment object
                    console.log("match found")

                    //enrollmentsList[i].Submissions.Add(link);

                    var row = document.createElement("tr");

                    var enrollmentidcol = document.createElement("td");
                    enrollmentidcol.innerHTML = enrollmentsList[i].EnrollmentID;
                    row.appendChild(enrollmentidcol);

                    var studentidcol = document.createElement("td");
                    studentidcol.innerHTML = enrollmentsList[i].StudentID;
                    row.appendChild(studentidcol);

                    var courseidcol = document.createElement("td");
                    courseidcol.innerHTML = enrollmentsList[i].CourseID;
                    row.appendChild(courseidcol);

                    var submissionlink = document.createElement("td");
                    submissionlink.innerHTML = link;
                    row.appendChild(submissionlink);

                    submissionslist.appendChild(row);
                    return;
                }
            }
        }
    }
}

function emptyList(List) {
    while (List.options.length > 0) {
        List.remove(0);
    }
}
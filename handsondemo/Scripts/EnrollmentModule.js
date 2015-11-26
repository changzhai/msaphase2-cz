var EnrollmentModule = (function () {

    return {
        getEnrollments: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                // API url here
                url: "https://handsondemo.azurewebsites.net/api/Enrollments",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getEnrollmentById: function (enrollmentid, callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://handsondemo.azurewebsites.net/api/Enrollments/" + enrollmentid,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addEnrollment: function (enrollment, callback) {
            $.ajax({
                url: "https://handsondemo.azurewebsites.net/api/Enrollments/",
                type: "POST",
                data: enrollment,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        updateEnrollment: function (enrollmentid, enrollment, callback) {
            $.ajax({
                url: "https://handsondemo.azurewebsites.net/api/Enrollments/" + enrollmentid,
                type: "PUT",
                data: enrollment,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });
        },

        deleteEnrollment: function (enrollmentid, callback) {
            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "https://handsondemo.azurewebsites.net/api/Enrollments/" + enrollmentid,
                success: function (data) {
                    callback();
                }
            });
        }
    };
}());
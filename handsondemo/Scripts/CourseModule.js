var CourseModule = (function () {

    return {
        getCourses: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                // API url here
                url: "https://handsondemo.azurewebsites.net/api/Courses",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getCourseById: function (id, callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://handsondemo.azurewebsites.net/api/Courses/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addCourse: function (course, callback) {
            $.ajax({
                url: "https://handsondemo.azurewebsites.net/api/Courses/",
                type: "POST",
                data: course,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });

        },

        updateCourse: function (courseid, course, callback) {
            $.ajax({
                url: "https://handsondemo.azurewebsites.net/api/Courses/" + courseid,
                type: "PUT",
                data: course,
                success: function (data, textStatus, jqXHR) {
                    callback();
                }
            });
        },

        deleteCourse: function (courseid, callback) {
            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "https://handsondemo.azurewebsites.net/api/Courses/" + courseid,
                success: function (data) {
                    callback();
                }
            });
        }
    };
}());
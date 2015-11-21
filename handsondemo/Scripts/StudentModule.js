var StudentModule = (function () {
    var privatethingy = 10;
    return {
        getStudents: function (callback) {
            // code to make api calls goes here
            console.log("this was called from studentmodule");

            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://handsondemo.azurewebsites.net/api/students",
                success: function (data) {
                    callback(data);
                }
            });
        }
    }
}());
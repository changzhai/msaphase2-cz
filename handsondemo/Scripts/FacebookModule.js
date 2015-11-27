var FacebookModule = (function () {

    return {
        getName: function (callback) {
            $.ajax({
                type: "GET",
                // API url here
                url: "https://graph.facebook.com/bgolub?fields=id,name,picture",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },
    }
});
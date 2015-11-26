$(document).ready(function () {
    $('.edit').click(function () {
        $(this).hide();
        $(this).siblings('.save, .cancel').show();
        console.log("edit clicked")
    });
    $('.cancel').click(function () {
        $(this).siblings('.edit').show();
        $(this).siblings('.save').hide();
        $(this).hide();
    });
    $('.save').click(function () {
        $(this).siblings('.edit').show();
        $(this).siblings('.cancel').hide();
        $(this).hide();
    });
});
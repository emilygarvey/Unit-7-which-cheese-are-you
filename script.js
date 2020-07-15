
$(".submit").click(function() {
    let age = $(".age").val();
    let taste = $(".taste").val();
    $(".results").append("<p>You are " + age + " years old and you like foods that taste " + taste + ".</p>");
    $(".results").show();
});
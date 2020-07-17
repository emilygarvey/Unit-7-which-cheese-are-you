let count = 0;
$(".submit").click(function() {
    let age = $(".age").val();
    let taste = $(".taste").val();
    $(".results").append("<p>You are " + age + " years old and you like foods that taste " + taste + ".</p>");
    $(".results").show();
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " times");

});
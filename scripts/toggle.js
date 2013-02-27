$(document).ready(function() {
    $(".toggle").click(function() {
        $(this).nextAll(".toggle-wrap").first().toggle("slow");
    });
});
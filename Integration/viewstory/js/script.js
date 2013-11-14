$("section#steps nav.navSteps a").on("click", function(e){
    e.preventDefault();
    toggleStep($(e.currentTarget).data("step"));
});

$("section#steps section.step nav a").on("click", function(e){
    e.preventDefault();
    toggleStep($(e.currentTarget).data("way"));
});


function toggleStep(step) {
    $("section#steps li.focused").removeClass("focused");
    $("section#steps section.focused").removeClass("focused");
    $("section#steps nav ul li:nth-child("+step+")").toggleClass("focused");
    $("section#steps section#step"+step).toggleClass("focused");
}
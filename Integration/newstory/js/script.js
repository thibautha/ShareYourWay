var steps = 1;
$(".createContainer a.newStep").on("click", function(e){
    e.preventDefault();
    steps++;
    var section = $("<fieldset>").addClass("innerStep");
    //Separator
    var hr = $("<hr>");
    //Cur step
    var step = $("<span>").addClass("curStep").html(steps);
    //Title
    var labelTitle = $("<label>").html("Title");
    var inputTitle = $("<input>").attr("type","text").attr("name","step"+steps+"Title");
    //Description
    var labelDesc = $("<label>").html("Description");
    var txtDesc = $("<textarea>").attr("name","step"+steps+"Desc");
    //Location
    var labelLoc = $("<label>").html("Location");
    var inputLoc = $("<input>").attr("type","text").attr("name","step"+steps+"Location");
    //File
    var labelFile = $("<label>").html("Choose File");
    var inputFile = $("<input>").attr("type","file").attr("name","step"+steps+"File");
    
    section.append(hr, step, labelTitle, inputTitle, labelDesc, txtDesc, labelLoc, inputLoc, labelFile, inputFile);
    $(".innerStep").last().after(section);
});

$("fieldset.innerStep").on("click", 'label', function(){
    $(this).next().focus();
});
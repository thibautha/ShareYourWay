var steps = 1;
$(".createContainer a.newStep").on("click", function(e){
    e.preventDefault();
    steps++;
    
    
    
    /******************************* PAS D'ID SUR LES INPUT ET AUTRES CONNERIES, UNE FONCTION AU CLIC SUR LES LABEL QUI FOCUS L'INPUT SUIVANT ! */
    
    
    var section = $("<fieldset>").addClass("innerStep");
    //Separator
    var hr = $("<hr>");
    //Cur step
    var step = $("<span>").addClass("curStep").html(steps);
    //Title
    var labelTitle = $("<label>").attr("for","step"+steps+"Title").html("Title");
    var inputTitle = $("<input>").attr("type","text").attr("id","step"+steps+"Title");
    //Description
    var labelDesc = $("<label>").attr("for","step"+steps+"Desc").html("Description");
    var txtDesc = $("<textarea>").attr("id","step"+steps+"Desc");
    //Location
    var labelLoc = $("<label>").attr("for","step"+steps+"Location").html("Location");
    var inputLoc = $("<input>").attr("type","text").attr("id","step"+steps+"Location");
    //File
    var labelFile = $("<label>").attr("for","step"+steps+"File").html("Choose File");
    var inputFile = $("<input>").attr("type","file").attr("id","step"+steps+"File");
    
    section.append(hr, step, labelTitle, inputTitle, labelDesc, txtDesc, labelLoc, inputLoc, labelFile, inputFile);
    $(".innerStep").last().after(section);
});

$("input").keyup(function(){

    let size = $("input").val().length;

    if (size > 5){
        $("input").addClass("is-valid");
        $("input").removeClass("is-invalid");
    }

    else{
        $("input").addClass("is-invalid");
    } 
    
    console.log(size);

})

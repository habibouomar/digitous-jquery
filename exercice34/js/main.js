
let get = $("input").val()
console.log(get);

$("button").click(function(){

    $.ajax({
        url: 'https://restcountries.com/v3.1/name/' + get,
        success: function(data, statuts, response) {

            $("#country").html(data[0].name.common);
            $("#capital").html(data[0].capital[0]);
        }
    });

})

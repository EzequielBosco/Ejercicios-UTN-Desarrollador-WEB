$("#btnenviar").click(function(){
    $.ajax(
        {
            method: "POST",
            url: "https://reqres.in/api/users",
            data: {
                "name": $("#txtnombre").val(),
                "job": $("#txttrabajo").val()
            }
        }
    ).done(function(response){
        console.log(response);
        $("#respuesta").append(
            "<span>Nombre: " + response.name + " Trabajo: " + response.job + "</span>"
        )
    })
});

 $("#btnlista").click(function(){
    $.ajax(
        {
            method: "GET",
            url: "https://reqres.in/api/users"
        }
    ).done(function(response){
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];
            $("#lista").append(
                "<li>Nombre: " + element.first_name + " Trabajo: " + element.email + "</li>"
            )
            
        }
    })
}); 

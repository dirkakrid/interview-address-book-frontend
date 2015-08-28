function testApi(){
    $.ajax({
        url: "api/contacts",
    }).done(function(data) {
        for (var i=0; i < data.length; i++)
        {
            console.log(data[i].name);
        }
    });
}

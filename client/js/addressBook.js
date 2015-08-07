function testApi(){
    $.ajax({
        url: "api/contacts",
    }).done(function(data) {
        for (var i=0; i < data.length; i++)
        {
            alert('hey');
            alert(data[i].name);
        }
    });
}

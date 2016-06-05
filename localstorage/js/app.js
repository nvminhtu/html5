$(document).ready(function(){

    $.getJSON("data/data.json").done(function(data){

        localStorage.setItem("data", JSON.stringify(data));

        //01- Load contacts to list
        $.each(data.contacts, function(index, value){
            $("#contacts ul").append(
                "<li class='topcoat-list__item'>\
                    First Name: " + value.first + "<br> Last Name: " + value.last +
                "</li>"
            );
        });

        //02- Load districts to list
        $.each(data.districts, function(index, value){
            $("#districts ul").append(
                  "<li class='topcoat-list__item'>\
                    District code: " + value.slug + "<br> District name: " + value.name +
                "</li>"
            );
        });
    }).fail(function(){

        if(localStorage.length != 0){

            var localData = $.parseJSON(localStorage.getItem("data"));

            $.each(localData.contacts, function(index, value){

                $("#contacts ul").append(
                    "<li class='topcoat-list__item'>\
                        First Name: " + value.first + "<br> Last Name: " + value.last +
                   "</li>"
                );

            });

        }

    });

});

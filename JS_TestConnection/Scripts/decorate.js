if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

$(function () {
    var inputs = document.getElementsByTagName("input");
    
    for (var i = 0; i < inputs.length; i++) {
        var t = inputs[i].getAttribute("type").toLowerCase();
        if (t == "text" || t == "datetime") {
            inputs[i].className = "form-control";
        }
    }
    var txtarea = document.getElementsByTagName("textarea");
    txtarea[0].className = "form-control";

    var ph = $('.row').height();
    var ch = $('#btnSubmit').outerHeight();

    $('#btnSubmit').css('margin-top', ((ph - ch) / 2));
});


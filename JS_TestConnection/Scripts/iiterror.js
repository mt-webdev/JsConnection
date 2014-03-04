if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

var dataSent = false;
var hasConnection = true;
var fields = new Array("Kürzel", "Standort", "DateTime", "Nachricht");
var rows = new Array();

$(function () {
    document.getElementById('txtKürzel').value = CookieHandler();

    TryLoadImage();

    FillWithDateTime('txtDateTime');

    $('#btnSubmit').click(function () {
        TryLoadImage();
        var s1 = document.getElementById('txt' + fields[0]).value;
        var s2 = document.getElementById('txt' + fields[1]).value;
        var s3 = document.getElementById('txt' + fields[2]).value;;
        var s4 = document.getElementById('txt' + fields[3]).value;

        var sTest = s1 + s2 + s4;

        if (sTest != "") {
            AddTableRow(s1, s2, s3, s4);
        }
    });
});

function CookieHandler() {
    var exists = /[name]/.exec(document.cookie)
    if (exists == null) {
        var d = new Date();
        d.setMinutes(d.getMinutes() + 1);
        var expires = "expires=" + d.toGMTString();
        document.cookie = "name=mt1; " + expires;
        alert("null");
    }
    return GetUserCookie(document.cookie);
}

function GetUserCookie(cookies) {
    var regexp = /([name=])(\w{2}\d)/;
    var res = regexp.exec(cookies);
    return RegExp.$2;
}

function continueExecution() {
    TryLoadImage();
}

function TryLoadImage() {

    var img = $("<img />").attr('src', 'http://ppedv.de/Images/ppedvlogo_klein.png?x="' + Math.floor((Math.random() * 1000000) + 1).toString())
    .load(function () {
        document.getElementById('noConnection').innerHTML = "connected";
        document.getElementById('noConnection').style.color = 'darkGreen';
        hasConnection = true;
    }).error(function () {
        if (hasConnection) {
            document.getElementById('noConnection').innerHTML = "";
        }

        hasConnection = false;

        document.getElementById('noConnection').innerHTML = "not connected";
        document.getElementById('noConnection').style.color = 'red';

        setTimeout(continueExecution, 3000);
    });
}

function FillFields() {
    for (var i = 0; i < fields.length; i++) {
        var e = fields[i];
        document.getElementById('h' + e).innerHTML = document.getElementById('txt' + e).value;
    }
}

function FillWithDateTime(e) {
    var date = new Date();
    var options = {
        year: "numeric", month: "numeric",
        day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
    };

    document.getElementById(e).value = GetCurrentDate();
}

function GetCurrentDate() {
    var date = new Date();
    var options = {
        year: "numeric", month: "numeric",
        day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
    };
    return date.toLocaleTimeString("de-DE", options);
}

function AddTableRow(wer, wo, wann, was) {
    var tr = document.createElement('tr');
    for (var i = 0; i < 4; i++) {
        var td = document.createElement('td');
        var txt = "true";

        txt = document.getElementById('txt' + fields[i]).value;
        td.appendChild(document.createTextNode(txt));
        tr.appendChild(td);
    }
    document.getElementById('tbdyOutput').innerHTML = tr.outerHTML;
    $('#tblOutput').fadeIn();
}

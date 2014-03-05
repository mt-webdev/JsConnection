if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

//--Variables
var dataSent = false;
var hasConnection = true;
//---------------------- 0 --------- 1 -------- 2 --------- 3 -------- 4 ------
var fields = new Array("Kürzel", "Standort", "DateTime", "Problem", "Nachricht");
var rows = new Array();
//--


//--class MsgData
var MsgData = function(n, d)
{
    var self = this;
    
    self.Name = n;
    self.DateTime = GetCurrentDate();
    self.Standort = "";
    self.Problem = "";
    self.Nachricht = "";
}
//--


//--Jquery - Document.Load.Finished
$(function () {
    document.getElementById('uiKürzel').value = CookieHandler();

    TryLoadImage();

    $('#btnSubmit').click(function () {
        TryLoadImage();
        var s1 = document.getElementById('ui' + fields[0]).value;
        var s2 = document.getElementById('ui' + fields[1]).value;
        var s3 = document.getElementById('ui' + fields[2]).value;
        var s4 = document.getElementById('ui' + fields[3]).value;
        var s5 = document.getElementById('ui' + fields[4]).value;
        var sTest = s1 + s2 + s4 + s5;

        if (sTest != "") {
            AddTableRow(s1, s2, s3, s4, s5);
        }
    });
});
//--


//--InitFields

//Cookie Handling
function CookieHandler() {
    var exists = /[name]/.exec(document.cookie)
    if (exists == null) {
        var d = new Date();
        var newMonth = d.getMonth() + 6;

        if (newMonth > 12) {
            newMonth -= 12;
        }

        d.setMonth(newMonth);

        var expires = "expires=" + d.toGMTString();
        document.cookie = "name=mt1; " + expires;
        alert("Dein Cookie ist abgelaufen - bitte gebe dein Kürzel erneut ein.");
    }
    return GetUserCookie(document.cookie);
}

function GetUserCookie(cookies) {
    var regexp = /([name=])(\w{2}\d)/;
    var res = regexp.exec(cookies);
    return RegExp.$2;
}
//--


//Workaround for Internet-Connection issues
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

function continueExecution() {
    TryLoadImage();
}
//--


//--Get-Methods
function GetCurrentDate() {
    var date = new Date();
    var options = {
        year: "numeric", month: "numeric",
        day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
    };
    return date.toLocaleTimeString("de-DE", options);
}
//--

//--Create LastMsg Table
function AddTableRow(wer, wo, wann, was1, was2) {
    var tr = document.createElement('tr');
    for (var i = 0; i < fields.length; i++) {
        var td = document.createElement('td');

        txt = document.getElementById('ui' + fields[i]).value;
        td.appendChild(document.createTextNode(txt));
        tr.appendChild(td);
    }
    document.getElementById('tbdyOutput').innerHTML = tr.outerHTML;
    $('#tblOutput').fadeIn();
}
//--
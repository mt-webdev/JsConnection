<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>MyKnock</title>
    <script src="Scripts/jquery-1.10.2.js"></script>
    <script src="Scripts/Knockout.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">

        <p>First name:
            <input data-bind="value: firstName" />
        </p>
        <p>Last name:
            <input data-bind="value: lastName" />
        </p>
        <h2>Hello, <span data-bind="text: fullName"></span>!</h2>
    </form>

    <script src="Scripts/simpleknock.js"></script>
</body>
</html>

<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Scripts/jquery-1.10.2.js"></script>
    <script src="Scripts/Knockout.js"></script>
</head>
<body>
    <form id="form1" runat="server">

        <p>
            Status:
            <input type="checkbox" data-bind='checked: Gesendet' />
        </p>
        <p>
            Wer:
            <input type="text" data-bind='value: Wer' />
        </p>
        <p>
            Wo:
            <input type="text" data-bind='value: Wo' />
        </p>
        <p>
            Wann:
            <input type="text" data-bind='value: Wann' />
        </p>
        <p>
            Was:
            <input type="text" data-bind='value: Was' />
        </p>
        <p>
            <input type="submit" data-bind="click: addMessage" />
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Wer</th>
                    <th>Wo</th>
                    <th>Wann</th>
                    <th>Was</th>
                </tr>
            </thead>
            <tbody>
                <tr data-bind="foreach: messages">
                    <td>
                        <input data-bind='value: $data, valueUpdate: "afterkeydown"' />
                    </td>
                </tr>
            </tbody>
        </table>

    </form>

    <script src="Scripts/myknock.js"></script>
</body>
</html>

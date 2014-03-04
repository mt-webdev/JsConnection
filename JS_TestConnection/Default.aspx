<%@ Page Title="ppedv Fehlermeldung" Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JS_TestConnection._Default" %>

<!DOCTYPE html>

<html lang="en">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ppedv Fehlermeldung</title>

    <asp:PlaceHolder runat="server">
        <%: Scripts.Render("~/bundles/modernizr") %>
    </asp:PlaceHolder>

    <script src="Scripts/jquery-1.10.2.js"></script>

    <webopt:BundleReference runat="server" Path="~/Content/css" />
    <link href="~/favicon.ico" rel="shortcut icon" type="image/x-icon" />

    <link href="Content/bootstrap.css" rel="stylesheet" />
    <script src="Scripts/decorate.js"></script>
    <script src="Scripts/iiterror.js"></script>
    <script src="Scripts/Knockout.min.js"></script>
</head>
<body>
    <form runat="server">

        <div style="font-size: 0; line-height: 0">
            <span id="hKürzel"></span>
            <span id="hStandort"></span>
            <span id="hDateTime"></span>
            <span id="hNachricht"></span>
        </div>
        <div class="container body-content">
            <div class="jumbotron">
                <span class="h1 text-danger">Melde dein Problem der IIT</span>
                <div class="h4 text-muted">Keines der unteren Felder ist ein Pflichtfeld! Erleichtert jedoch unsere Arbeit.</div>
            </div>
            <asp:ValidationSummary CssClass="h4" ForeColor="Red" runat="server" />
            <div class="row">
                <div class="col-md-12 h4">
                    Verbindungsstatus:&nbsp;
                    <span id="noConnection"></span>
                </div>
                <div class="col-md-3">
                    <input type="button" class="btn btn-danger" id="btnSubmit" value="Senden" />
                </div>
                <div class="col-md-9">
                    <table class="table table-responsive">
                        <thead>
                            <tr>
                                <th>Dein Kürzel</th>
                                <th>Standort</th>
                                <th>Zeitpunkt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="form-inline">
                                    <asp:TextBox ID="txtKürzel" Placeholder="Dein Kürzel" Width="150px" runat="server"></asp:TextBox>
                                    <%--                            <asp:RegularExpressionValidator ForeColor="Red" ID="regKürzel" ErrorMessage="Kürzel ungültig" ControlToValidate="txtKürzel"
                                ValidationExpression="(pre)?(\w{2}\d{2})?" runat="server">*</asp:RegularExpressionValidator>--%>
                                </td>
                                <td>
                                    <asp:TextBox ID="txtStandort" Width="250px" list="standorte" placeholder="Standort" runat="server"></asp:TextBox>
                                    <datalist id="standorte">
                                        <option>Berlin</option>
                                        <option>Burghausen</option>
                                        <option>Dresden</option>
                                        <option>Düsseldorf</option>
                                        <option>Frankfurt</option>
                                        <option>Karlsruhe</option>
                                        <option>Köln</option>
                                        <option>München</option>
                                        <option>Nürgnberg</option>
                                        <option>Leipzig</option>
                                        <option>Stuttgart</option>
                                        <option>Wien</option>
                                    </datalist>
                                </td>
                                <td>
                                    <asp:TextBox ID="txtDateTime" Width="250px" TextMode="DateTime" Enabled="false" placeholder="Datum / Uhrzeit" runat="server"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">Beschreibung:
                    <asp:TextBox ID="txtNachricht" TextMode="MultiLine" Rows="5" placeholder="Kurze Erläuterung . . ." runat="server"></asp:TextBox>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table id="tblOutput" class="table" style="display: none">
                        <thead>
                            <tr>
                                <th class="h4 text-info" colspan="5">Deine letzte Meldung:</th>
                            </tr>
                            <tr>
                                <th>Wer</th>
                                <th>Wo</th>
                                <th>Wann</th>
                                <th>Was</th>
                            </tr>
                        </thead>
                        <tbody id="tbdyOutput">
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <footer>
                <p>&copy; ppedv AG</p>
            </footer>
        </div>
    </form>
</body>
</html>

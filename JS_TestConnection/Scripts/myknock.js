// Here's my data model

var cMessage = function () {
    this.Gesendet = ko.observable(false);
    this.Wer = ko.observable();
    this.Wo = ko.observable();
    this.Was = ko.observable();
    this.Wann = ko.observable();
}

var MessageModel = function () {
    var self = this;
    self.Nachrichten = ko.observableArray([new cMessage()]);

    self.addNachricht = function () {
        self.Nachrichten.push();
    };
}

ko.applyBindings(new MessageModel());
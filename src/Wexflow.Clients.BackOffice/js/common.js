﻿Common = {

    redirectToLoginPage: function () {
        window.location.replace("index.html");
    },

    trimEnd: function (string, charToRemove) {
        while (string.charAt(string.length - 1) === charToRemove) {
            string = string.substring(0, string.length - 1);
        }

        return string;
    },

    get: function (url, callback, errorCallback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200 && callback) {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    callback(data);
                } else {
                    callback();
                }
            }
        };
        xmlhttp.onerror = function () {
            if (errorCallback) errorCallback();
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    },

    post: function (url, callback, errorCallback, json) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200 && callback) {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    callback(data);
                } else {
                    callback();
                }
            }
        };
        xmlhttp.onerror = function () {
            if (errorCallback) errorCallback();
        };
        xmlhttp.open("POST", url, true);
        //xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(json));
    },

    launchType: function (lt) {
        switch (lt) {
            case 0:
                return "Startup";
            case 1:
                return "Trigger";
            case 2:
                return "Periodic";
            case 3:
                return "Cron";
            default:
                return "";

        }
    },

    status: function (s) {
        switch (s) {
            case 0:
                return "<img src='images/pending-small.png' /> Pending";
            case 1:
                return "<img src='images/running-small.png' /> Running";
            case 2:
                return "<img src='images/done-small.png' /> Done";
            case 3:
                return "<img src='images/failed-small.png' /> Failed";
            case 4:
                return "<img src='images/warning-small.png' /> Warning";
            case 5:
                return "<img src='images/disabled-small.png' /> Disabled";
            case 6:
                return "<img src='images/stopped-small.png' /> Stopped";
            default:
                return "";
        }
    },

    disableButton: function (button, disabled) {
        button.disabled = disabled;
    },

    formatDate: function (d) {
        return ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

    }

};
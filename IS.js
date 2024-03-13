
function startSpeedTest() {
    showProgressMessage("Calculating Speed ...");
    window.setTimeout(measureConnectionSpeed, 1);
}
document.querySelector('button').addEventListener('click', startSpeedTest);

var imageAddr = "https://4k-uhd.nl/wp-content/uploads/2018/08/4K-3840x2160-Wallpaper-Uitzicht-5.jpg";
var downloadSize = 5739426; 

function showProgressMessage(msg) {
    var progressElement = document.getElementById("progress");
    if (progressElement) {
        progressElement.innerHTML = msg;
    }
}

function showResultMessage(msg) {
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = msg;
        document.getElementById("progress").innerHTML = 'Your Internet Speed is';
    }
}

function measureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();

    download.onload = function () {
        endTime = new Date().getTime();
        showResults();
    };

    download.onerror = function () {
        showProgressMessage("Check your internet connection or try again");
    };

    startTime = new Date().getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        showResultMessage(speedMbps + " Mbps");
    }
}
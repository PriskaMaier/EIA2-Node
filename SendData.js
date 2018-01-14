var SendData;
(function (SendData) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        setupColorDivs();
    }
    //Farbfelder werden dynamisch erzeugt
    function setupColorDivs() {
        console.log("Hallo");
        let colors = ["red", "green", "blue"];
        let divs = document.getElementsByTagName("div");
        console.log(divs);
        for (let i = 0; i < divs.length; i++) {
            console.log(i);
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }
    //handelt den EventListener, beim Klick auf eins der Farbfelder wird die Funktion sendRequest aufgerufen,
    //d.h. die Farbe ausgew�hlt und dieser Teil neu geladen
    function handleClickOnDiv(_event) {
        let style = _event.target.style;
        console.log(style.backgroundColor);
        sendRequest(style.backgroundColor);
    }
    //
    function sendRequest(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?color=" + _color, true);
        xhr.open("GET", "https://priskamaier-eia2.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert(xhr.response);
        }
    }
})(SendData || (SendData = {}));
//# sourceMappingURL=SendData.js.map
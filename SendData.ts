namespace SendData {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        setupColorDivs();
    }

    //Farbfelder werden dynamisch erzeugt
    function setupColorDivs(): void {
        console.log("Hallo");
        let colors: string[] = ["red", "green", "blue"];
        let divs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        console.log(divs);
        for (let i: number = 0; i < divs.length; i++) {
            console.log(i);
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }

    //handelt den EventListener, beim Klick auf eins der Farbfelder wird die Funktion sendRequest aufgerufen,
    //d.h. die Farbe ausgewählt und dieser Teil neu geladen
    function handleClickOnDiv(_event: Event): void {
        let style: CSSStyleDeclaration = (<HTMLElement>_event.target).style;
        console.log(style.backgroundColor);
        sendRequest(style.backgroundColor);
    }

    //
    function sendRequest(_color: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?color=" + _color, true);
        xhr.open("GET", "https://priskamaier-eia2.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert(xhr.response);
        }
    }
}
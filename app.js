var Button = document.querySelector("#button-translate");
var Input = document.querySelector("#name");
var Output = document.querySelector("#out-put");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function GetserverURL(text) {
    return serverURL + "?" + "text=" + text
}


Button.addEventListener("click", touch);

function errorhandler(error){
    console.log("error is here" , error)
    alert("somthing went wrong Please try again after some time 🙏")
}

function touch() {
    var innertext = Input.value

    fetch(GetserverURL(innertext))
        .then(response => response.json())
        .then(json => {
            var translate = json.contents.translated;
            Output.innerText = translate;})
            .catch(errorhandler)

};
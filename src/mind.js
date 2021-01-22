function formSerialize(element){
    var elements = document.querySelector(element);
    var formData = new FormData(elements);
    return formData;
}

function actionPost(url, data, callback) {

    var xhttp = new XMLHttpRequest();

    // Set POST method and ajax file path
    xhttp.open("POST", url, true);

    // call on request changes state
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            if(callback) callback(this.responseText);
        }
    };

    // Send request with data
    xhttp.send(data);
    
} 

function appendItem(element, value){
    let elements = document.querySelectorAll(element);
    if(elements.length >= 1){

        elements.forEach(function(element) {
            if(element.value === undefined){
                element.textContent = value;
            } else {
                element.value = value;
            }
        });
    }
}
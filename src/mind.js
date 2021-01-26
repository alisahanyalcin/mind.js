/**
 *
 * @package    mind.js
 * @version    Release: 1.0.0
 * @license    GPL3
 * @author     Ali YILMAZ <aliyilmaz.work@gmail.com>
 * @category   Javascript Framework, Basic web development kit.
 * @link       https://github.com/aliyilmaz/mind.js
 *
 */
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

function actionGet(url, callback) {

    var xhttp = new XMLHttpRequest();

    // Set GET method and ajax file path
    xhttp.open("GET", url, true);

    // call on request changes state
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(callback) callback(this.responseText);
        }
    };

    xhttp.send(null);
    
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
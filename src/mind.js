/**
 *
 * @package    mind.js
 * @version    Release: 1.0.6
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

function clickItem(element, callback){
    let buttons = document.querySelectorAll(element);
    for(var i = 0; i<buttons.length; i++){
        
        buttons[i].addEventListener('click', (e) => {   
            if(callback) callback(e.target);
        });

    };
}

function keyupItem(element, callback){
    let elements = document.querySelectorAll(element);
    for(var i = 0; i<elements.length; i++){
        
        elements[i].addEventListener('keyup', (e) => {   
            if(callback) callback(e.target);
        });

    };
}

function hideItem(element, callback){
    let elements = document.querySelectorAll(element);
    for(var i = 0; i<elements.length; i++){
        
        if(elements[i] !== undefined){
            elements[i].style.visibility = "hidden";
            if(callback) callback(this);
        }

    };
}

function showItem(element, callback){
    let elements = document.querySelectorAll(element);
    for(var i = 0; i<elements.length; i++){
      
        if(elements[i] !== undefined){
            elements[i].style.visibility = "visible";
            if(callback) callback(this);
        }
        
    };
}

function removeItem(element, callback){
    let elements = document.querySelectorAll(element);
    for(var i = 0; i<elements.length; i++){
      
        if(elements[i] !== undefined){
            elements[i].remove();
            if(callback) callback(this);
        }
    
    };
}

function redirect(url, delay=0, element=''){

    let wait = 0,
        inter = null,
        elements = [];

    if(element != ''){
        wait = 1000;
        elements = document.querySelectorAll(element);
    } 
    
    inter = setInterval(function () {
        if(delay === 0){
            clearInterval(inter);
            location.replace(url);
        } else {
            
            if(elements.length >= 1){

                elements.forEach(function(element) {
                    if(element.value === undefined){
                        element.textContent = delay;
                    } else {
                        element.value = delay;
                    }
                });
            }
        }
        delay--;
    }, wait);
    
}

function getLocation(element='', callback) {

    let elements = [];
    if(element != ''){
        elements = document.querySelectorAll(element);
    }
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(function(position){
            
            let coordinates = position.coords.latitude+','+position.coords.longitude;
            
            if(elements.length >= 1){
        
                elements.forEach(function(element) {
                    if(element.value === undefined){
                        element.textContent = coordinates;
                    } else {
                        element.value = coordinates;
                    }
                });
            } 

            if(callback) callback(position);
        });
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}
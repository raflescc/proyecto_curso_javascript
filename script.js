/*-----------------------------------------------------------------------------------
 Curso JavaScript
 Proyecto Final: Conversor de Unidades
 Rafael Campos Camargo
-----------------------------------------------------------------------------------*/

/* ===== CONVERSOR DE LONGITUD ===== */
function convertLength(){
    const input = parseFloat(document.getElementById("length-input").value);    // Tomar el valor de entrada
    const unit = document.getElementById("length-unit").value;                  // Tomar las unidades de conversión
    const textArea = document.getElementById("length-result");                  // Variable para manipular el área de resultado
    let result;                                                                 // Variable para guardar el resultado

    if(isNaN(input)){                                       // Verificar si el número ingresado es válido
        result = "Ingresa un número válido";
        textArea.style.backgroundColor = "lightcoral";      // Modificar color en caso de número inválido
    }else{
        switch(unit){                                       // Conversión según la unidad elegida
            case "meters":
                result = input + " m";
                break;
            case "kilometers":
                result = input * 0.001 + " Km";
                break;
            case "centimeters":
                result = input * 100 + " cm";
                break;
            case "millimeters":
                result = input * 1000 + " mm";
                break;
            case "miles":
                result = input * 0.00062137 + " mi";
                break;
            case "yards":
                result = input * 1.0936133 + " yd";
                break;
            case "feet":
                result = input * 3.2808399 + " ft";
                break;
            case "inches":
                result = input * 39.3700787 + " in";
                break;
        }
        
        textArea.style.backgroundColor = "lightgreen";      // Modificar color para el resultado
    }

    textArea.innerText = result;                            // Colocar el resultado en el área de resultado
};

/* ===== CONVERSOR DE VOLÚMEN ===== */
function convertVolume(){
    
    const input = parseFloat(document.getElementById("volume-input").value);    // Tomar el valor de entrada
    const unit = document.getElementById("volume-unit").value;                  // Tomar las unidades de conversión
    const textArea = document.getElementById("volume-result");                  // Variable para manipular el área de resultado
    let result;                                                                 // Variable para guardar el resultado

    if(isNaN(input)){                                       // Verificar si el número ingresado es válido
        result = "Ingresa un número válido";
        textArea.style.backgroundColor = "lightcoral";      // Modificar color en caso de número inválido
    }else{
        switch(unit){                                       // Conversión según la unidad elegida
            case "liters":
                result = input + " L";
                break;
            case "milliliters":
                result = input * 1000 + " ml";
                break;
            case "gallons":
                result = input * 0.26417205 + " gal";
                break;
            case "quarts":
                result = input * 1.05668821 + " qt";
                break;
            case "pints":
                result = input * 2.11337642 + " pt lqd";
                break;
            case "cups":
                result = input * 4.22675284 + " cup";
                break;
            case "fluid ounces":
                result = input * 33.8140227 + " fl oz";
                break;
        }
        
        textArea.style.backgroundColor = "lightgreen";      // Modificar color para el resultado
    }

    textArea.innerText = result;                            // Colocar el resultado en el área de resultado
};

/* ===== CONVERSOR DE PESO ===== */
    function convertWeight(){
    const input = parseFloat(document.getElementById("weight-input").value);    // Tomar el valor de entrada
    const unit = document.getElementById("weight-unit").value;                  // Tomar las unidades de conversión
    const textArea = document.getElementById("weight-result");                  // Variable para manipular el área de resultado
    let result;                                                                 // Variable para guardar el resultado

    if(isNaN(input)){                                       // Verificar si el número ingresado es válido
        result = "Ingresa un número válido";
        textArea.style.backgroundColor = "lightcoral";      // Modificar color en caso de número inválido
    }else{
        switch(unit){                                       // Conversión según la unidad elegida
            case "kilograms":
                result = input + " Kg";
                break;
            case "grams":
                result = input * 1000 + " g";
                break;
            case "milligrams":
                result = input * 1000000 + " mg";
                break;
            case "pounds":
                result = input * 2.20462262 + " lb";
                break;
            case "ounces":
                result = input * 35.273962 + " oz";
                break;
        }
        
        textArea.style.backgroundColor = "lightgreen";      // Modificar color para el resultado
    }

    textArea.innerText = result;                            // Colocar el resultado en el área de resultado
};

/* ===== CONVERSOR DE TEMPERATURA ===== */
function convertTemperature(){
    const input = parseFloat(document.getElementById("temperature-input").value);   // Tomar el valor de entrada
    const unit = document.getElementById("temperature-unit").value;                 // Tomar las unidades de conversión
    const textArea = document.getElementById("temperature-result");                 // Variable para manipular el área de resultado
    let result;                                                                     // Variable para guardar el resultado

    if(isNaN(input)){                                       // Verificar si el número ingresado es válido
        result = "Ingresa un número válido";
        textArea.style.backgroundColor = "lightcoral";      // Modificar color en caso de número inválido
    }else{
        switch(unit){                                       // Conversión según la unidad elegida
            case "celsius":
                result = input + " °C";
                break;
            case "fahrenheit":
                result = input * 33.8 + " °F";
                break;
            case "kelvin":
                result = input * 274.15 + " °K";
                break;
        }
        
        textArea.style.backgroundColor = "lightgreen";      // Modificar color para el resultado
    }

    textArea.innerText = result;                            // Colocar el resultado en el área de resultado
};
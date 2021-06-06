/// fibonacci numbers
function fibonacci() {
    num1 = 0;
    num2 = 1;
    result = num2;
    fibo = [];
    for (i = 0; i < 20 - 1; i++) {
        if (num1 == 0) {
            fibo.push(0);
        }
        fibo.push(result);
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
    document.getElementById('fibo').innerHTML = 'Fibonacci-series till 20' + '<br>' + fibo.join('<br>');
}

/// Graduation date counter.
function counter() {
    today = new Date();
    EndDay = new Date('07/31/2024'); // mm/dd/yyyy

    difference = EndDay.getTime() - today.getTime();
    MsInDay = 1000 * 60 * 60 * 24;
    newDiff = Math.floor(difference / MsInDay);
    document.getElementById('graduation-counter').innerHTML = 'I will graduate from TAMK in ' + newDiff + ' days';
}

// BMI-calculator.
function BMI() {
    mass = document.getElementById('masskg').value;
    heightCm = document.getElementById('heightcm').value;
    height = heightCm / 100;
    bodymassIndex = parseFloat(mass) / parseFloat(height ** 2);
    bodymassIndex = bodymassIndex.toFixed(2);
    document.getElementById('Result').innerHTML = 'BMI = ' + bodymassIndex + ' kg/m<sup>2<sup>';
}

// hiphop game. 
function HipHop() {
    let, b1 = +(document.getElementById("min").value);
    let, b2 = +(document.getElementById("max").value);
    let, b1 = high;
    let, b2 = low;
    if (b1 < b2) {
        b1 = low;
        b2 = high;
    }
    let, output = '';
    
    for (i = low; i <= high; i++) {
        let, normalCase = true;
        let, hipString = '';
        if (i % 7 == 0) {
            hipString += "hop";
            normalCase = false;
        } 
        if (i % 3 == 0) {
            hipString += "hip";
            normalCase = false;
        } 
        if(normalCase){
            hipString += i.toFixed();
        }
        output += hipString + '<br>'
    }
    document.getElementById("values").innerHTML = output;
}

var num1 = Math.floor(Math.random() * 10) + 1; 
var num2 = Math.floor(Math.random() * 10) + 1; 

function task1(num1, num2) //create a function.
{
    if(num1 > num2){
        console.log(num2 + ' is less than ' + num1);
    }
    else if(num1 < num2){
        console.log(num2 + ' is greater than ' + num1);
    }
    else if(num1 == num2){
        console.log(num1 + ' is equal to ' + num2);
    }
}

task1(num1, num2); //calling a function.

//task 2: 
function task2(min, max)
{
    for(i = min; i<= max ;i++)
    {
        if(i%2 == 0){
            console.log(i);
        }
    }
    for(i = min; i<= max ;i++)
    {
        if(i%2 != 0){
            console.log(i);
        }
    }
}

task2(3, 7);


//task 3:
function task3(min, max)
{
    var even = [];
    var odd = [];

    for(i = min; i<= max ;i++)
    {
        if(i%2 == 0) {
            even.push(i);
        }
    }
    for(i = max; i >= min; i--)
    {
        if(i%2 != 0) {
            odd.push(i);
        }
    }
    var numbers = even.concat(odd);
    console.log(numbers);
} 

task3(3, 7);


//task4:
function task4(testString) {
    var toGetrid = /[\W_]/g; //to get rid of non alpha-numeric characters.
    var newString = testString.toLowerCase().replace(toGetrid, ''); //turn the string to lowercase to check for palindrom.
    var reversed = newString.split('').reverse().join('');
    //console.log(reversed);
    if (reversed == newString) {
        return true;
    }
    else {
       return false;
    }
}

console.log(task4('step on no pets'));

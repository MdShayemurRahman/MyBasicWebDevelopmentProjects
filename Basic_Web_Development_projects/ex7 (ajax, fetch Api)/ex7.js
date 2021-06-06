// task 1
var catPic = document.getElementById('randpic');

fetch('http://aws.random.cat/meow', {
    method: 'get'
})
    .then(res => {
        return res.json();
    })
    .then(data => {
        catPic.innerHTML = data.file
        catPic.setAttribute("href", data.file)
    });


// task 2 
var students = [];

function getAllStudents(){
    fetch("http://localhost:3010/students")
    .then(promise => promise.json())
    .then(data => students.push(data));
}
getAllStudents();

console.log(students);




function listAll() {
    var table = document.getElementById('table')
    table.innerHTML = 
        `<tr>
            <th>Name</th>
            <th>info</th>
            <th>Points</th>
        </tr>`

    for (var i = 0; i < students.length; i++) {
        var row = 
        `<tr class="points ${(students[i].exercise_points == null || students[i].exercise_points < 50 ? 'color1' : 'color2')}">
            <td> ${students[i].name} </td>
            <td> ${students[i].info} </td>
            <td> ${students[i].exercise_points} </td>
        </tr>`
        table.innerHTML += row;
    }
}

document.getElementById("btn").addEventListener("click", function () {
    addStudent();
});

function addStudent() {
    var name = document.getElementById('name').value;
    var info = document.getElementById('info').value;
    var points = document.getElementById('points').value;

    students.push({ id:"", "name": name, "info": info, "exercise_points": points });
    listAll();
}

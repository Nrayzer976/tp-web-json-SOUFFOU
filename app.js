fetch("./data.json")
.then(response => response.json())
.then(data => {
    const list = document.getElementById("students");
    data.students.forEach(student => {
        const li = document.createElement("li");
        li.textContent = `${student.name} - ${student.score}`;
        list.appendChild(li);
    });
})
.catch(error => console.error("Error loading JSON:", error));
    
const nStudent = document.getElementById("addStudent");
const sStudent = document.getElementById("suppStudent");
const list = document.getElementById("students");
const firstName = document.getElementById("fname");
const theAge = document.getElementById("age");

nStudent.addEventListener("click", addStudents);

function addStudents() {
    if (firstName.value === "" || theAge.value === "") {
        alert("Please enter both name and age.");
        return;
    }
    const li = document.createElement("li");
    li.textContent = `${firstName.value} - ${theAge.value}`;
    list.appendChild(li);
    firstName.value = "";
    theAge.value = "";
};
/*
 * Student: {name: String, grades: Array[Numbers]}
 * Given 3 students -> find the best one
 * the best one is the one who has the highest scrore
 * in case more than 1 persons have same score -> print them all out
 * */
let ti = {
    name: "Ti",
    grades: [9, 8, 6]
}
let teo = JSON.parse(JSON.stringify(ti));
teo.name = 'teo';
teo.grades = [6, 7, 8];

let tun = JSON.parse(JSON.stringify(ti));
teo.name = 'tun';
teo.grades = [6, 7, 9];

const students = [ti, teo, tun];
const bestStudent = findBestStudent(students);
console.log('the best student is ', bestStudent)
function findBestStudent(students) {
    let currentHighestScore = 0;
    let bestStudent = undefined;
    for (const student of students) {
        const avarageScore = calculateAvarageScore(student);
        console.log('avarageScore is ', avarageScore)
        if (avarageScore >= currentHighestScore) {
            console.log("vao")
            bestStudent = student;
            currentHighestScore = avarageScore;
        }
    }
    return bestStudent
}
function calculateAvarageScore(student) {
    const studentGrades = student.grades;
    console.log("vao2", studentGrades)
    let totalGrade = 0;
    let scoreLength = studentGrades.length;
    console.log("scoreLength", scoreLength)
    for (const grade of studentGrades) {
        totalGrade = totalGrade + grade;
    }
    return Math.floor(totalGrade / scoreLength);
}

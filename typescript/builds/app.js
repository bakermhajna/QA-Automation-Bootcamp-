"use strict";
function sum(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
}
console.log(sum([1, 2, 3, 4, 5]));
function isEven(num) {
    return num % 2 == 0;
}
class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGradeAvg() {
        return sum(this.grades) / this.grades.length;
    }
}
const student1 = new Student("baker", 24, [90, 91]);
const student2 = new Student("dodo", 24, [90, 91]);
const student3 = new Student("omar", 24, [90, 91]);
student1.addGrade(95);
student2.addGrade(89);
student3.addGrade(88);
const arrStudent = [student1, student2, student3];
arrStudent
    .map(student => `name is ${student.name} and the average grade is ${student.getGradeAvg()}`)
    .forEach(s => console.log(s));


function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = [];
  this.maxLessons = 25;

  this.getAge = function(currentYear) {
    return currentYear - this.birthYear;
  };

  this.addGrade = function(grade) {
    this.grades.push(grade);
  };

  this.getAverageGrade = function() {
    if (!this.grades.length) return 0;
    const sum = this.grades.reduce((acc, g) => acc + g, 0);
    return sum / this.grades.length;
  };

  this.markAttendance = function(value) {
    if (this.attendance.length < this.maxLessons) {
      this.attendance.push(value);
    } else {
      console.log("Відвідуваність вже заповнена.");
    }
  };

  this.present = function() {
    this.markAttendance(true);
  };

  this.absent = function() {
    this.markAttendance(false);
  };

  this.summary = function() {
    const avg = this.getAverageGrade();
    const attendanceRate = this.attendance.filter(Boolean).length / this.attendance.length;
    if (avg > 90 && attendanceRate > 0.9) return "Молодець!";
    if (avg > 90 || attendanceRate > 0.9) return "Добре, але можна краще";
    return "Редиска!";
  };
}

const student1 = new Student("Іван", "Горм", 2000);
student1.addGrade(88);
student1.present();
student1.absent();
console.log(student1.summary());

const student2 = new Student("Марія", "Петренко", 2004);
student2.addGrade(92);
student2.addGrade(91);
student2.present();
console.log(student2.summary()); 


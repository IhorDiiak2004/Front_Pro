
class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = [];
        this.maxLessons = 25;
    }

    getAge(currentYear) {
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    getAverageGrade() {
        return this.grades.length ? this.grades.reduce((sum, grade) => sum + grade) / this.grades.length : 0;
    }

    markAttendance(value) {
        if (this.attendance.length < this.maxLessons) {
            this.attendance.push(value);
        } else {
            console.log("Відвідуваність вже заповнена.");
        }
    }

    present() {
        this.markAttendance(true);
    }

    absent() {
        this.markAttendance(false);
    }

    summary() {
        const avg = this.getAverageGrade();
        const attendanceRate = this.attendance.filter(Boolean).length / this.attendance.length;
        if (avg > 90 && attendanceRate > 0.9) return "Молодець!";
        if (avg > 90 || attendanceRate > 0.9) return "Добре, але можна краще";
        return "Редиска!";
    }
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

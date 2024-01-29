var name = prompt("Enter student name");
var english = parseInt(prompt("Enter English marks"));
var math = parseInt(prompt("Enter Math marks"));
var science = parseInt(prompt("Enter Science marks"));

var total = english + math + science;
var percentage = (total / 300) * 100;

var grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else {
  grade = "F";
}

alert("Student Name: " + name + "\n" +
      "English: " + english + "\n" +
      "Math: " + math + "\n" +
      "Science: " + science + "\n" +
      "Total: " + total + "\n" +
      "Percentage: " + percentage + "\n" +
      "Grade: " + grade);
// Write a function that calculates a student's grade based on their score. Implement a function that takes a numerical score as input and returns the corresponding letter grade (A, B, C, D, F).

function studentGradeSystem(grade) {
    if (grade >= 80) {
        console.log("You got an A");
    } else if (grade >= 70) {
        console.log("You got a B");
    } else if (grade >= 60) {
        console.log("You got a C");
    } else if (grade >= 50) {
        console.log("You got a D");
    } else {
        console.log("You got an F");
    }
}

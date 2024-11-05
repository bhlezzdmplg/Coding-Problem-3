// Collecting user's age and storing it in a variable
let age = 25; // Replace this with the user's age input

// Categorizing the age using a nested if-else statement
if (age < 5) {
    console.log("Toddler (under 5 years)");
} else if (age >= 5 && age <= 12) {
    console.log("Child (5–12 years)");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager (13–19 years)");
} else if (age >= 20 && age <= 35) {
    console.log("Young Adult (20–35 years)");
} else if (age >= 36 && age <= 60) {
    console.log("Middle-Aged (36–60 years)");
} else if (age > 60) {
    console.log("Senior (over 60 years)");
} else {
    console.log("Invalid age");
}
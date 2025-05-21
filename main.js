console.log("Workout Log script loaded!");
const displayDiv = document.querySelector("#current-exercise-display");

let exerciseName = "Squats";

let sets = 3;
let reps = 10;
let durationInMinutes = 5;

console.log(`The exercise is: ${exerciseName}, you are going to do ${sets} sets of ${reps} reps for a duration of ${durationInMinutes} minutes`)
let isExerciseDone = false;
console.log("Is it done?", isExerciseDone); 

isExerciseDone = true;
console.log("Is it done now?", isExerciseDone);

displayDiv.textContent = `The exercise is: ${exerciseName}, you are going to do ${sets} sets of ${reps} reps for a duration of ${durationInMinutes} minutes`

//We are given array of marks of students.filter out of the marks of students that scored 90+. ?
let marks = [97, 64, 32, 49, 99, 86];

let toppers = marks.filter((val) => {
    return val > 90;
})

console.log(toppers);
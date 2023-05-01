var students = [
   {
    firstName: 'Wangel',
    lastName: 'Yohannes',
    age: '22',
   }, 
   {
    firstName: 'Yolyana',
    lastName: 'Yohannes',
    age: '19',
   },
   {
    firstName: 'Katherine',
    lastName: 'Soriano',
    age: '21',
   } 
];

function displayStudent (student){
    if (student) {
        console.log(`Hello! My name is ${student.firstName} ${student.lastName} and I am ${student.age} years old.`)
    }
    else {
        console.log(`Student not in the system`)
    }
}
displayStudent(students[1])
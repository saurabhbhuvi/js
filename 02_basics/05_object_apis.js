// ++++++ objects part3  Destructing

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

 console.log(course.courseInstructor); // not feasable to write it again and again to fetch the value instead we do 


const {courseInstructor} = course
console.log(courseInstructor);    // hitesh : when ever we want we can just call it easy to use if we wanna call it multiple times 

// we can also use a simpler name instead of writing that thing again and again 

const {courseInstructor: instructor} = course
console.log(instructor);  // hitesh 

//all does the same thing but we mostly use 2nd and 3rd 

//--------------------------------------------------------

//json format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

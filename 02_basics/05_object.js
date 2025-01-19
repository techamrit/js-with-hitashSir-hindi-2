const course = {
  coursename: "js in hindi",
  price: 4444,
  courseInstructor: "amrit",
};
// course.courseInstructor;
const { courseInstructor: Instructor } = course;

console.log(Instructor);

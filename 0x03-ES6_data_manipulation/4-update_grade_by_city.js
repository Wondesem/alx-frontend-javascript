export default function updateStudentGradeByCity(student, city, newGrades) {
  return students.filter((obj) => obj.location === city).map((obj) => ({...obj, grade: newGrade.filter((gr) => gr.studentId === obj.id).map((gr) => gr.id)[0] || 'N/A'}))
}

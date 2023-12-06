export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((obj) => obj.location === city).map((obj) => ({ ...obj, grade: newGrades.filter((gr) => gr.studentId === std.id).map((g) => g.grade)[0] || 'N/A' }));
}

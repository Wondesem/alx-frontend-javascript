export default function getStudentIdsSum(students) {
	return students.reduce((count, object) => count + object.id, 0);
}

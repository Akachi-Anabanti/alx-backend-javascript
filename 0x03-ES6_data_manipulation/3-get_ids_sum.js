export default function getStudentIdsSum(studentList) {
  return studentList.reduce(
    (acc, currentValue) => acc + currentValue.id, 0,
  );
}

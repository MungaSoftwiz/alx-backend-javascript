export default function getStudentIdsSum(getListStudents) {
  const initialValue = 0;
  return getListStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    initialValue,
  );
}

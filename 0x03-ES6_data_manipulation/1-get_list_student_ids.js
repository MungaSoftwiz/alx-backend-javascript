export default function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) { return []; }
  return studentsArray.map((obj) => obj.id);
}

// Grade statistics calculator

while (true) {
  const gradesStr = prompt("Enter the student's grades separated by commas: ");

  const grades = gradesStr.split(',').map(Number);

  const average =
    grades.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / grades.length;

  const max = Math.max(...grades);
  const Min = Math.min(...grades);

  const passingStudents = grades.filter((grade) => grade >= 70).length;
  const failingStudents = grades.filter((grade) => grade < 70).length;

  const orderedGrades = grades.sort((a, b) => b - a);

  alert(`Grades average: ${average.toFixed(2)}
  Highest Grade: ${max}
  Lowest Grade: ${Min}
  Number of Passing Students: ${passingStudents}
  Number de Failing Students: ${failingStudents}
  List of grades ordered from highest to lowest: ${orderedGrades.join(', ')}`);
}

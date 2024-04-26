// Average grades calculator

while (true) {
  const gradesStr = prompt('Enter the grades separated by commas: ');
  const grades = gradesStr.split(',').map(Number);
  const sum = grades.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sum / grades.length;
  alert(`El promedio de las calificaciones es: ${average.toFixed(2)}`);
}

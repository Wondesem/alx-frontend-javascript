interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student {
  firstName: 'Wonde',
  lastName: 'Sem',
  age: 36,
  location: 'Addis Ababa'
};

const student2: Student {
  firstName: 'Abraham',
  lastName: 'Ayalew',
  age: 36,
  location: 'Jima'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = 'pink';
table.appendChild(tbody);

studentList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const column = document.createElement('td');
  const colomnLocation = document.createElement('td');

  column.textContent = student.firstName;
  columnLocation.textContent = student.location

  column.style.border = '1px solid pink';
  columnLocation.border = '1px solid pink';
  column.style.padding = '5px';
  columnLocation.style.padding = '5px';

  row.appendChild(column);
  row.appendChild(columnLocation);
  tbody.appendChild(row);
});

document.body.appendChild(table);

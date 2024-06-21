export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const studentOne: Student = {
    firstName:"Jennifer", 
    lastName: "Anabanti", 
    age: 25,
    location:"New York"
};

const studentTwo: Student = {
    firstName: "Promise",
    lastName:"Shady",
    location:"California",
    age: 25
};

const studentList: Array<Student> =[studentOne, studentTwo];
export const renderTable = (studentList: Array<Student>): void => {
    const table = document.createElement('table');
    const header = document.createElement('tr');
    table.insertAdjacentElement('beforeend', header);

    header.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    header.insertAdjacentHTML('beforeend', '<th>Location</th>');

    for (const student of studentList){
        const studentRow = document.createElement('tr');
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);

        table.insertAdjacentElement('beforeend', studentRow)
    }
document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentList)
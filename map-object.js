const students = [
    {id:11111, name:'omar sunny'},
    {id:11112, name:'sakib khan'},
    {id:11113, name:'ilias kanchon'},
    {id:11114, name:'dipjol'}
];
const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.find(s => s.id>11111);
console.log(names);
console.log(ids);
console.log(bigger);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function getStudentInfo() {
  console.log('Enter student details:');
  
  const rollNumber = await ask('Roll Number: ');
  const name = await ask('Name: ');
  const branch = await ask('Branch: ');
  const rank = await ask('Rank: ');
  const age = await ask('Age: ');
  
  return { rollNumber, name, branch, rank, age };
}

async function main() {
  const student = await getStudentInfo();
  
  console.log('\n' + '='.repeat(40));
  console.log('        STUDENT DETAILS');
  console.log('='.repeat(40));
  console.log('Roll Number: ' + student.rollNumber);
  console.log('Name:        ' + student.name);
  console.log('Branch:      ' + student.branch);
  console.log('Rank:        ' + student.rank);
  console.log('Age:         ' + student.age);
  console.log('='.repeat(40));
  
  rl.close();
}

main();
0
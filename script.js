document.getElementById('studentForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    await fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age })
    });

    alert('Student added');
    loadStudents();
});

async function loadStudents() {
    const res = await fetch('http://localhost:3000/students');
    const students = await res.json();
    const list = document.getElementById('studentList');
    list.innerHTML = '';
    students.forEach(s => {
        const li = document.createElement('li');
        li.textContent = `${s.name} (${s.age})`;
        list.appendChild(li);
    });
}

loadStudents();

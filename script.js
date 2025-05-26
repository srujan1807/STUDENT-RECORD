const apiBaseUrl = 'http://localhost:5000/students'; // Use port 3000 for Express

document.getElementById('student-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  const response = await fetch(`${apiBaseUrl}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: parseInt(id), name, age: parseInt(age) })
  });

  const result = await response.json();
  document.getElementById('output').innerText = JSON.stringify(result, null, 2);
});

async function getStudent() {
  const id = document.getElementById('id').value;

  const response = await fetch(`${apiBaseUrl}/${id}`);
  const result = await response.json();

  document.getElementById('output').innerText = JSON.stringify(result, null, 2);
}

async function deleteStudent() {
  const id = document.getElementById('id').value;

  const response = await fetch(`${apiBaseUrl}/${id}`, {
    method: 'DELETE',
  });

  const result = await response.json();
  document.getElementById('output').innerText = JSON.stringify(result, null, 2);
}

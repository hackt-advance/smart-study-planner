function addTask() {
  const task = document.getElementById('task').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (!task || !date || !time) {
    alert('Please fill all fields');
    return;
  }

  const day = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${task}</td>
    <td>${day}</td>
    <td>${date}</td>
    <td>${time}</td>
    <td><button class="delete-btn" onclick="this.parentElement.parentElement.remove()">Delete</button></td>
  `;

  document.getElementById('taskList').appendChild(row);

  document.getElementById('task').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dateTimeInput = document.getElementById('dateTimeInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        const dateTime = new Date(dateTimeInput.value).toLocaleString();
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <span>${dateTime}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
        dateTimeInput.value = '';
    }
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}

function speakTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.getElementsByTagName('span')).map(span => span.textContent);
    const speech = new SpeechSynthesisUtterance();
    speech.text = tasks.join(', ');
    window.speechSynthesis.speak(speech);
}

function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const now = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);

    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    timeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
}

setInterval(updateDateTime, 1000);
updateDateTime();
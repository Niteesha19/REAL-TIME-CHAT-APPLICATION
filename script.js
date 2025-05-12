const socket = io();

let username = '';

function login() {
    const input = document.getElementById('usernameInput');
    const name = input.value.trim();
    if (name) {
        username = name;
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('chatBox').style.display = 'block';
    }
}

function sendMessage() {
    const input = document.getElementById('msgInput');
    const msg = input.value.trim();
    if (msg) {
        socket.emit('chat message', `${username}: ${msg}`);
        input.value = '';
    }
}

const messages = document.getElementById('messages');

socket.on('chat message', (msg) => {
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li);
});

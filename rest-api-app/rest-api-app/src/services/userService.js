const { users } = require('../models/userModel');

function registerUser({ username, password, favorecido }) {
    if (!username || !password) {
        return { error: 'Username and password required.' };
    }
    if (users.find(u => u.username === username)) {
        return { error: 'User already exists.' };
    }
    const user = { id: users.length + 1, username, password, favorecido: !!favorecido };
    users.push(user);
    return user;
}

function loginUser({ username, password }) {
    if (!username || !password) {
        return { error: 'Username and password required.' };
    }
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return { error: 'Invalid credentials.' };
    }
    return user;
}

function getAllUsers() {
    return users;
}

module.exports = { registerUser, loginUser, getAllUsers };

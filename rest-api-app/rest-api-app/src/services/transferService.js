const { users } = require('../models/userModel');
const { transfers } = require('../models/transferModel');

function processTransfer(senderId, recipientId, amount) {
    const sender = users.find(u => u.id == senderId);
    const recipient = users.find(u => u.id == recipientId);
    if (!sender || !recipient) {
        return { error: 'Sender or recipient not found.' };
    }
    if (!recipient.favorecido && amount >= 5000) {
        return { error: 'Transfers above R$ 5.000,00 only allowed to favorecido.' };
    }
    const transfer = { id: transfers.length + 1, senderId, recipientId, amount, date: new Date() };
    transfers.push(transfer);
    return transfer;
}

function getTransferHistory(userId) {
    return transfers.filter(t => t.senderId == userId || t.recipientId == userId);
}

module.exports = { processTransfer, getTransferHistory };

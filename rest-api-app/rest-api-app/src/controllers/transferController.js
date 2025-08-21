const transferService = require('../services/transferService');

exports.transferFunds = (req, res) => {
    const { senderId, recipientId, amount } = req.body;
    const transferResult = transferService.processTransfer(senderId, recipientId, amount);
    if (transferResult.error) {
        return res.status(400).json({ error: transferResult.error });
    }
    return res.status(200).json({ message: 'Transfer successful', transfer: transferResult });
};

exports.getTransferHistory = (req, res) => {
    const { userId } = req.params;
    const history = transferService.getTransferHistory(userId);
    return res.status(200).json(history);
};

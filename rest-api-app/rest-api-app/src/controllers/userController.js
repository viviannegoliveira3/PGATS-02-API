const userService = require('../services/userService');

exports.register = (req, res) => {
    const result = userService.registerUser(req.body);
    if (result.error) {
        return res.status(400).json({ error: result.error });
    }
    return res.status(201).json(result);
};

exports.login = (req, res) => {
    const result = userService.loginUser(req.body);
    if (result.error) {
        return res.status(400).json({ error: result.error });
    }
    return res.status(200).json(result);
};

exports.getAll = (req, res) => {
    return res.status(200).json(userService.getAllUsers());
};

const jwt = require('jsonwebtoken');

exports.requireLogin = (req, res, next) => {
    const token =
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token missing' });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (err) {
        console.error('Error during token verification:', err);
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};

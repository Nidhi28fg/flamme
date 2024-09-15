// routes/friend.js
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Invalid token' });
    }
};

// Get all users (to search and add as friends)
router.get('/users', authenticateToken, async (req, res) => {
    try {
        const users = await User.find({ _id: { $ne: req.user } });
        res.json(users);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Add friend
router.post('/add-friend/:id', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user);
        const friend = await User.findById(req.params.id);

        if (!friend || user.friends.includes(friend._id)) {
            return res.status(400).json({ msg: 'Cannot add this friend' });
        }

        user.friends.push(friend._id);
        await user.save();

        res.json({ msg: 'Friend added', user });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Get friends list
router.get('/friends', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user).populate('friends');
        res.json(user.friends);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Friend recommendations (based on mutual friends)
router.get('/recommendations', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user).populate('friends');
        const allUsers = await User.find({ _id: { $ne: req.user } });

        // Simple mutual friends recommendation logic
        const recommendations = allUsers.filter(otherUser => {
            const mutualFriends = otherUser.friends.filter(friendId =>
                user.friends.includes(friendId.toString())
            );
            return mutualFriends.length > 0;
        });

        res.json(recommendations);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;

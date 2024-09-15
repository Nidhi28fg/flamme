// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ token }) => {
  const [friends, setFriends] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await axios.get('/api/friends/friends', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFriends(res.data);
      } catch (err) {
        console.log('Error fetching friends:', err);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const res = await axios.get('/api/friends/recommendations', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRecommendations(res.data);
      } catch (err) {
        console.log('Error fetching recommendations:', err);
      }
    };

    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/friends/users', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.log('Error fetching users:', err);
      }
    };

    fetchFriends();
    fetchRecommendations();
    fetchUsers();
  }, [token]);

  const addFriend = async (userId) => {
    try {
      await axios.post(
        `/api/friends/add-friend/${userId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Re-fetch the updated friends list
      const res = await axios.get('/api/friends/friends', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFriends(res.data);
    } catch (err) {
      console.log('Error adding friend:', err);
    }
  };

  return (
    <div>
      <h2>Welcome to your dashboard</h2>

      <div>
        <h3>Your Friends</h3>
        <ul>
          {friends.map((friend) => (
            <li key={friend._id}>{friend.username}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Friend Recommendations</h3>
        <ul>
          {recommendations.map((rec) => (
            <li key={rec._id}>
              {rec.username} <button onClick={() => addFriend(rec._id)}>Add Friend</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Search Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.username} <button onClick={() => addFriend(user._id)}>Add Friend</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;


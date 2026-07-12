import { memo } from 'react';
import './StoriesBar.css';

const mockStories = [
  { id: 1, username: 'alex_k', avatar: '🧑', seen: false },
  { id: 2, username: 'maria', avatar: '👩', seen: false },
  { id: 3, username: 'john_doe', avatar: '👨', seen: true },
  { id: 4, username: 'sara_w', avatar: '👧', seen: false },
  { id: 5, username: 'mike99', avatar: '🧔', seen: true },
  { id: 6, username: 'linda', avatar: '👩‍🦱', seen: false },
  { id: 7, username: 'chris_x', avatar: '🧒', seen: false },
];

const StoriesBar = () => {
  return (
    <div className="stories-bar">
      {mockStories.map(({ id, username, avatar, seen }) => (
        <div key={id} className="story-item">
          <div className={`story-ring${seen ? ' seen' : ''}`}>
            <div className="story-avatar">{avatar}</div>
          </div>
          <div className="story-thumbnail">{username}</div>
        </div>
      ))}
    </div>
  );
};

export default memo(StoriesBar);
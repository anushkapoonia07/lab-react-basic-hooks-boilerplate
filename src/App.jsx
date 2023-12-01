import React, { useState } from 'react';
import './App.css';
import Comment from './components/Comment';
import Like from './components/Like';

function App() {
  const [likes, setLikes] = useState(0);
  const [isCommentVisible, IsCommentVisible] = useState(false);
  const [isContainerBlack, IsContainerBlack] = useState(true);
  const handleLikeClick = () => setLikes(likes + 1);

  const handleCommentClick = () => {
    IsCommentVisible(!isCommentVisible);
    alert('Comment button clicked');
  };
  const handleToggleClick = () => IsContainerBlack(!isContainerBlack);
  return (
    <div className={`app ${isContainerBlack ? 'black' : 'grey'}`}>
      <div className="Container">
        <button className="ToggleButton" onClick={handleToggleClick}>
          Toggle
        </button>
      </div>
      <div >
        <Comment onCommentClick={handleCommentClick} isCommentVisible={isCommentVisible} />
        <Like onLikeClick={handleLikeClick} likes={likes} />
      </div>
    </div>
  );
}

export default App;
import React from "react";

function Comment({ onCommentClick, isCommentVisible }) {
  return (
    <div>
      <button style={{marginBottom: '70px', fontSize:'20px', paddingLeft:'15px',paddingRight:'15px' }}  onClick={onCommentClick}>Comment</button>
      {isCommentVisible && (<p style={{fontSize: '30px'}}>He masked the disturbance, though its coherence eluded comprehension. It was unmistakable that a hidden presence awaited discovery by anyone entering. Despite the evident secrecy, hope endured. Footsteps echoed down the hall, halting at the bedroom door. The door yielded to a familiar creak, and the awaited revelation of the visitor unfolded.</p>
)}
    </div>
  );
}

export default Comment;
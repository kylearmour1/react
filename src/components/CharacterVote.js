import React, { useState } from 'react';

const CharacterVote = () => {
  const [votes, setVotes] = useState({ jedi: 0, sith: 0 });

  const vote = (side) => {
    setVotes({ ...votes, [side]: votes[side] + 1 });
  };

  return (
    <div>
      <h2>Character Vote</h2>
      <p>Jedi: {votes.jedi}</p>
      <p>Sith: {votes.sith}</p>
      <button onClick={() => vote('jedi')}>Vote Jedi</button>
      <button onClick={() => vote('sith')}>Vote Sith</button>
    </div>
  );
};

export default CharacterVote;

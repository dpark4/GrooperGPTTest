// GrooperPage.js

import React, { useState } from 'react';

const GrooperPage = () => {
  // State to manage team members and groups
  const [teamMembers, setTeamMembers] = useState([
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
  ]);
  const [groups, setGroups] = useState([]);

  // Function to shuffle array elements (Fisher-Yates shuffle algorithm)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Function to assign team members to groups
  const assignGroups = () => {
    // Shuffle team members to randomize order
    const shuffledMembers = shuffleArray([...teamMembers]);

    // Calculate number of groups (for simplicity, let's assume 2 members per group)
    const numGroups = Math.ceil(shuffledMembers.length / 2);

    // Initialize groups array
    const newGroups = Array.from({ length: numGroups }, () => []);

    // Assign team members to groups
    shuffledMembers.forEach((member, index) => {
      const groupIndex = index % numGroups;
      newGroups[groupIndex].push(member);
    });

    // Update the 'groups' state with the generated groups
    setGroups(newGroups);
  };

  return (
    <div>
      <h1>Grooper - Subgroup Formation</h1>
      <button onClick={assignGroups}>Generate Groups</button>
      {/* Display team members */}
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      {/* Display generated groups */}
      <h2>Groups</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            Group {index + 1}: {group.join(', ')}
          </li>
        ))}
      </ul>
      {/* Display reports */}
      <h2>Weekly Contribution Analysis</h2>
      {/* Add reports here */}
    </div>
  );
};

export default GrooperPage;

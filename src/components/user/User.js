import React from 'react';

const User = ({item}) => {
  return (
    <div>
      <div>name is - {item.name}</div>
      <div>age is - {item.age}</div>
      <div>status is - {item.status.toString()}</div>
    </div>
  );
};

export default User;
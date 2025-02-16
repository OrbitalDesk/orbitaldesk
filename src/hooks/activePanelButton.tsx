'use client';

import React, { useState } from 'react';

const ActiveButton = () => {
  const [active, setActive] = useState(false);
  const boolean = active ? 'TRUE' : 'FALSE';

  return (
    <>
      <p>{boolean}</p>
    </>
  );
};

export default ActiveButton;

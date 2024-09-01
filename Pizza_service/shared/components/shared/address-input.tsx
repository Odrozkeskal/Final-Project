'use client';

import React from 'react';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange?.(value);
  };

  return (
    <input
      type="text"
      placeholder="Enter address"
      onChange={handleChange}
    />
  );
};



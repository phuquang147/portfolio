import React from 'react';
import { FaAppStore } from 'react-icons/fa';
import Button from '~/ui-components/Button';

export default function Footer() {
  return (
    <div className="h-[100px] bg-secondary">
      <Button children={<FaAppStore />} type="icon" />
    </div>
  );
}

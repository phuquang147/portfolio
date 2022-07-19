import React from 'react';

interface Props {
  content: string;
}

export default function Heading({ content }: Props) {
  return (
    <div className="bg-heading-bg bg-cover text-center pt-header-height">
      <p className="text-white font-bold text-7xl py-28">{content}</p>
    </div>
  );
}

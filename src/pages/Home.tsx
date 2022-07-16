import React from 'react';
import Button from '~/ui-components/Button';

function Home() {
  return (
    <div className="">
      <div className="pt-header-height bg-main-bg bg-cover h-[1000px]"></div>
      <Button type="secondary" children="abc" />
      <div className="pt-header-height bg-white bg-cover h-[1000px]"></div>
    </div>
  );
}

export default Home;

import React from 'react';
import HomeSection from './HomeSection';
import { homeObjOne  } from './homepage/Data';


function Home() {
  return (
    <>
      <HomeSection {...homeObjOne} />
    </>
  );
}

export default Home;
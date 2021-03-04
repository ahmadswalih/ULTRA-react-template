import React from 'react';
import { InfoSection, Pricing } from '../../Components';
import { homeObjFour} from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Services;

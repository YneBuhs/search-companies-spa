import React from 'react';

const Address = ({ address1, address2, city, state, postalCode }) => {
  return (
    <section>
      <p>{address1}</p>
      <p>{address2}</p>
      <p>{city}, {state} {postalCode}</p>
    </section>
  );
};

export default Address;
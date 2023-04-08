import React from 'react';

type Props = {};

export const NewYelloButton = ({}: Props) => {
  return (
    <>
      <button className='btn'>Button</button>
      <button className='btn btn-primary'>Button</button>
      <button className='btn btn-secondary'>Button</button>
      <button className='btn btn-accent'>åååååååå</button>
      <button className='btn btn-ghost'>Button</button>
      <button className='btn btn-link'>Button</button>
    </>
  );
};

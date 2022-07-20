import React from 'react';
import Stack from 'react-bootstrap/Stack';
import '../styles/logo.css';

function Logo() {
  return (
    <>
      <Stack gap={5} className='col-sm-5 mx-auto'>
        <img 
          src={require('../imgs/logo.png')} 
          alt='this is a logo' />
        <h1 className='text'>TOCA LA PANTALLA</h1>
      </Stack>
    </>
  );
}

export default Logo;
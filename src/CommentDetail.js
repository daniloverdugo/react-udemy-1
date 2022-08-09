   
import React from 'react';
// existe librería por importar en sample???


const NombreObjeto = () => {
	return (
<div className="ui container comments">
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            {faker.name.fullName({sex:"female"})}
          </a>
          <div className='metadata'>
            <span className='date'>Hoy a las 10:00</span>
          </div>
          <div className='text'>{faker.lorem.sentence(6)}</div>
        </div>
      </div>
    </div>
	);
};
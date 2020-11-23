import React from 'react';

const Card = props => {
  return (
    <div className={`card text-left ${props.backgroundColor}`}>
      <div className='overflow'>
        <div className='card-body text-dark'>
          <p> 12 Dec 2014</p>
          <h4 className='card-title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rerum tempore ad deserunt
          </h4>
          <p className='card-text text-secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rerum tempore ad deserunt temporibus maiores quisquam
            quia odit laborum cumque, nesciunt est similique, recusandae culpa
            accusamus nobis dolorem possimus explicabo? Magni quod optio sunt
            nulla assumenda, alias itaque rem veniam!
          </p>
          <a href='#' className='btn btn-outline-success'>
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

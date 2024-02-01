import React from 'react';




const List = ({people}) => {
  return (
    <>
      {people.map((person)=>
      {
         const {id,name,age,image}=person;
        return (
          <article key={id} className="person">
            <a href="http://127.0.0.1:5500/src/cake.html">
              <img src={image} alt={name} />
            </a>

            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );  
      })}
    </>
  );
};

export default List;

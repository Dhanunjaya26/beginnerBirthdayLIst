import React from 'react'

const Person = ({name, age, image}) => {
  // const {id, name, age, image} = person;
  return (
    <article className="person">
      <img
        style={{ width: "75px", height: "75px", borderRadius: "50%" }}
        src={image}
        alt="person photo"
      />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
}

export default Person;

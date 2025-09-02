import React from 'react'

const UserCard = ({user}) => {
    // console.log(user);
    const {firstName,lastName,photoUrl,age,gender,about}=user;
  return (

//  <div className="card bg-blue-500 w-80 shadow-sm">
<div className="flex justify-center my-6">
<div className="card bg-blue-500 w-96 max-w-sm shadow-sm"> 
  <figure>
    <img
    //   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    src={photoUrl}
      alt="Shoes" />    
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
   { age&& gender && <p>{age +","+gender}</p>}
    <p> {about}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
</div>
  )
}

export default UserCard


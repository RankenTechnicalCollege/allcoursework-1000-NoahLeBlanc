import React from 'react'

const student = () => {
  return (
    <div className='card'>
      <img src={student.image} alt='Our Student' className='card-img=top mx-auto' />
      <ul className='list-group list-group-flush'>
        <li className='list-group-item text-center'>{student.firstName}</li>
        <li className='list-group-item text-center'>{student.lastName}</li>
        <li className='list-group-item text-center'>{student.email}</li>
        <li className='list-group-item text-center'>{student.gradYear}</li>
      </ul>
    </div>
  )
}

export default student
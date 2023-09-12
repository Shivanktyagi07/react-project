import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

    const {userid} = useParams();
  return (
    <div className="bg-gray-700 text-3xl p-4 text-white">
      User : {userid}
    </div>
  )
}

export default User
 

import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/shivanktyagi07')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
  return (
    
    <div className='bg-gray-700 m-4 text-white p-4 text-3xl text-center'>
      Github Followers: {data.followers}
    </div>
  )
}

export default Github

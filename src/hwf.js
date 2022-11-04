/**import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


import React, { useEffect } from "react"
import { useState } from 'react';
function Fetch() {
    const [arabic, setArabic] = useState("");
    //const [banglap, setBanglap] = useState("");
    //const [banglam, setBanglam] = useState("");
    const fetchUserData = () => {
        fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                //console.log (s);
                setArabic(data);
            })
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    return (

        <div className='w-full h-full'>
            {arabic.length > 0 && (

                arabic.map(x) => x.ARABIC + x.BANGLA_UCCHARON + x.BANGLA_ORTHO);
            <div className='text-2xl bg-blue-200'>
                {arabic};
            </div>
)}
        </div>
    )

};
export default Fetch;**/


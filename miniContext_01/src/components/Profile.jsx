import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <h2>Please Login</h2>
  return (
    <div>
        Welcome : {user.userName}
    </div>
  )
}

export default Profile
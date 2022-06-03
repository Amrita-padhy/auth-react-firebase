import React from 'react'
import { useAuth } from '../context/auth-context'
function ProfilePage() {
  const { currentUser } = useAuth()

  return (
    <div>ProfilePage

<div>
{currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
</div>

    </div>
  )
}

export default ProfilePage
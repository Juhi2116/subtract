import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
const page = () => {

    const {getUser}=getKindeServerSession()
    const user =getUser()
  return (
    <div>
      hello
    </div>
  )
}

export default page

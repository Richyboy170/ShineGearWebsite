import React from 'react'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className="text-base font-bm-hanna">
      <p>Hello Richy (not Richy?
        <Link href="/MyAccount/LogInAndRegister" className="underline"> Log out </Link>
      )
      </p>
      <p>
        From your account dashboard you can view your 
        <Link href="/MyAccount/Orders" className="underline"> recent orders </Link>
        , manage your 
        <Link href="/MyAccount/Addresses" className="underline"> shipping and billing addresses </Link>
        , and 
        <Link href="/MyAccount/AccountDetails" className="underline"> edit your password and account details </Link>
        .
      </p>
    </div>
  )
}

export default Dashboard

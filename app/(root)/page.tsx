import React from 'react'
import { Button } from "@/components/ui/button"
import HeaderBox from '@/components/HeaderBox'

const page = () => {
  const isLoggedIn = { firstName: "Prajjwol" }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={isLoggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
      </div>
    </section>
  )
}

export default page
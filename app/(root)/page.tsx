import React from 'react'
import { Button } from "@/components/ui/button"
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

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
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={3021.46}
          />
        </header>
      </div>
    </section>
  )
}

export default page
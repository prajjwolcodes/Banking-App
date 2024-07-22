import React from 'react'
import { Button } from "@/components/ui/button"
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const page = () => {
  const isLoggedIn = { firstName: "Prajjwol", lastName: "Shrestha", email: "shresthaprajjwol4@gmail.com" }
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

        // Recent transactions

      </div>
      <RightSidebar
        user={isLoggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1234.12 }, { currentBalance: 4312.12 }]} />
    </section>
  )
}

export default page
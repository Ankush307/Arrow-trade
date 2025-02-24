import React from 'react'
import Header from '@/components/common/Header'
import TradeMarquee from '@/components/common/TradeMarquee'
import AiDriven from '@/components/blogs/AiDriven'
const page = () => {
  return (
    <div>
      <TradeMarquee />
      <Header />
      <AiDriven />
    </div>
  )
}

export default page
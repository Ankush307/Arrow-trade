import React from 'react'
import Header from '@/components/common/Header'
import TradeMarquee from '@/components/common/TradeMarquee'
import AiDriven from '@/components/blogs details/AiDriven'
import Footer from '@/components/common/Footer'
const page = () => {
  return (
    <div>
      <TradeMarquee />
      <Header />
      <AiDriven />
      <Footer />
    </div>
  )
}

export default page
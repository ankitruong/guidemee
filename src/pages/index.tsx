import Image from 'next/image'
import { HeaderComponent } from '@/components/header'
import { BannerComponent } from '../components/banner'
import { TrademarkComponent } from '../components/trademark'
import { FooterComponent } from '../components/footer'
import { Inter } from 'next/font/google'
import { FieldComponent } from '../components/field'
import { PortfolioComponent } from '@/components/portfolio'
import { MentorsComponent } from '@/components/mentors'
import { ConversationsComponent } from '@/components/conversations'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <section className={`container-fluid ${inter.className}`}>
      <HeaderComponent/>
      <BannerComponent/>
      <TrademarkComponent/>
      <FieldComponent/>
      <PortfolioComponent/>
      <MentorsComponent/>
      <ConversationsComponent/>
      <FooterComponent/>
    </section>

  )
}

import Image from 'next/image'
import { HeaderComponent } from '@/components/header'
import { BannerComponent } from '../components/banner'
import { TrademarkComponent } from '../components/trademark'
import { FooterComponent } from '../components/footer'
import { Inter } from 'next/font/google'
import { FieldComponent } from '../components/field'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <section className={`container-fluid ${inter.className}`}>
      <HeaderComponent/>
      <BannerComponent/>
      <TrademarkComponent/>
      <FieldComponent/>
      <section>describes</section>
      <section>mentors</section>
      <section>conversations</section>
      <FooterComponent/>
    </section>

  )
}

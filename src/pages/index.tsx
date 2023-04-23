import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HeaderComponent } from '@/components/header'
import { BannerComponent } from '../components/banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className='container'>
      <HeaderComponent/>
      <BannerComponent/>
      <section>trademarks</section>
      <section>fields</section>
      <section>describes</section>
      <section>mentors</section>
      <section>conversations</section>
      <footer>footer</footer>
    </section>

  )
}

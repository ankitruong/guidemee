import { Inter } from 'next/font/google'
import { HeaderComponent } from '@/components/header/desktop'
import { BannerComponent } from '../components/banner/desktop'
import { BannerComponent as BannerMobile } from '../components/banner/mobile'
import { TrademarkComponent } from '../components/trademark/desktop'
import { TrademarkComponent as TrademarkMobile } from '../components/trademark/mobile'
import { FooterComponent } from '../components/footer/desktop'
import { FooterComponent as FooterMobile } from '../components/footer/mobile'
import { FieldComponent } from '../components/field/desktop'
import { FieldComponent as FieldMobile } from '../components/field/mobile'
import { PortfolioComponent } from '@/components/portfolio/desktop'
import { PortfolioComponent as PortfolioMobile } from '@/components/portfolio/mobile'
import { MentorsComponent } from '@/components/mentors/desktop'
import { MentorsComponent as MentorsMobile } from '@/components/mentors/mobile'
import { ConversationsComponent } from '@/components/conversations/desktop'
import { ConversationsComponent as ConversationsMobile } from '@/components/conversations/mobile'
import { CoursesComponent } from '../components/courses/desktop'
import { CoursesComponent as CoursesMobile } from '../components/courses/mobile'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className={inter.className}>
      <div className={'desktop'}>
        <HeaderComponent/>
        <BannerComponent/>
        <TrademarkComponent/>
        <FieldComponent/>
        <PortfolioComponent/>
        <CoursesComponent/>
        <MentorsComponent/>
        <ConversationsComponent/>
        <FooterComponent/>
      </div>
      <div className={'mobile'}>
        <BannerMobile/>
        <TrademarkMobile/>
        <FieldMobile/>
        <PortfolioMobile/>
        <CoursesMobile/>
        <MentorsMobile/>
        <ConversationsMobile/>
        <FooterMobile/>
      </div>
    </section>
  )
}

import { Inter } from 'next/font/google'
import { HeaderComponent } from '@/components/header/desktop'
import { HeaderComponent as HeaderMobile } from '@/components/header/mobile'
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
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [currView, setcurrView] = useState<number>(0);
  useEffect(() => {
    if(isNotMobile) {
      setcurrView(1);
    }
  }, [isNotMobile])
 
  useEffect(() => {
    if(isMobile) {
      setcurrView(2);
    }
  }, [isMobile])

  return (
    <section className={inter.className}>
      {
        [0,1].includes(currView) && (
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
        )
      }
      {
        currView === 2 && (
          <div className={'mobile'}>
            <HeaderMobile/>
            <BannerMobile/>
            <TrademarkMobile/>
            <FieldMobile/>
            <PortfolioMobile/>
            <CoursesMobile/>
            <MentorsMobile/>
            <ConversationsMobile/>
            <FooterMobile/>
          </div>
        )
      }
    </section>
  )
}

import React from 'react';
import Meta from '@/app/components/Home/meta/Meta';
import Header from '@/app/shared/Header/header.component';
import Hero from '@/app/components/Home/Hero/hero.component';
import HausaIntro from '@/app/components/Home/HausaIntro/hausaIntro.component';
import YorubaIntro from '@/app/components/Home/YorubaIntro/yorubaIntro.component';
import AppStore from '@/app/components/Home/AppStore/appStore.component';
import Waitlist from '@/app/components/Home/Waitlist/Waitlist.component';
import Footer from '@/app/shared/Footer/footer.component';
import ScrollUp from '@/app/shared/ScrollToTop';

const Home = () => {
  return (
    <>
    <Meta
        title="LangPal - Home"
        keywords="LangPal home page, LangPal, learn Nigerian languages, Igbo, Hause, Yoruba, learn to speak igbo language, languages, language enthusiasts, Nigerians, African languages, learn hausa, learn yoruba, learn a Nigerian language while having fun, languages, linguists, language learners"
        description="LangPal is a language learning app."
        name="google-site-verification"
        content="xyz-verification-code"
    >
        <link rel="icon" href="/favicon.ico"/>
        <meta name="google-site-verification" content="xyz-verification-code"/>
    </Meta>
    <div className='index_container'>
        <Header/>
        <Hero/>
        <HausaIntro/>
        <YorubaIntro/>
        <AppStore/>
        <Waitlist/>
        <ScrollUp/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
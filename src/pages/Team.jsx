import React from 'react';
import Meta from '@/app/components/Home/meta/Meta';
import Header from '@/app/shared/Header/header.component';
import Footer from '@/app/shared/Footer/footer.component';
import ScrollUp from '@/app/shared/ScrollToTop';
import Team from '@/app/components/LangPalTeam/Team.component';

const Home = () => {
  return (
    <>
    <Meta
        title="LangPal - Team"
        keywords="LangPal home page, LangPal, LangPal team, learn Nigerian languages, Igbo, Hause, Yoruba, learn to speak igbo language, languages, language enthusiasts, Nigerians, African languages, learn hausa, learn yoruba, learn a Nigerian language while having fun, languages, linguists, language learners"
        description="LangPal is a language learning app."
        name="google-site-verification"
        content="xyz-verification-code"
    >
        <link rel="icon" href="/favicon.ico"/>
        <meta name="google-site-verification" content="xyz-verification-code"/>
    </Meta>
    <div className='index_container'>
        <Header/>
        <Team/>
        <ScrollUp/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
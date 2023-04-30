import Head from 'next/head'

import PointchsHome from '@/components/pointchsHome'
import Welcome from '@/components/welcom'
import Features from '@/components/features'
import WhyPointechs from '@/components/whyPointechs'
import HowPointechsWorks from "@/components/howPointechsWorks"
import PointechsApp from '@/components/pointechsApp'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
export default function Home() {
  const { t } = useTranslation('common');
  let {locale} = useRouter();
  return (
    <>
      <Head>
        <title>{t("Pointechs")}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      <div className='app' style={{direction:locale == 'en'?'ltr':'rtl'}}>
      <PointchsHome/>
      <Welcome/>
      <Features/>
      <WhyPointechs/>
      <HowPointechsWorks/>
      <PointechsApp/>
      </div>


    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}
import Head from "next/head";

import PointchsHome from "@/components/pointchsHome";
import Welcome from "@/components/welcom";
import Features from "@/components/features";
import WhyPointechs from "@/components/whyPointechs";
import HowPointechsWorks from "@/components/howPointechsWorks";
import PointechsApp from "@/components/pointechsApp";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import UserContext from "../context/context";
export default function Home() {
  const { t } = useTranslation("common");
  let { locale } = useRouter();

  return (
    <>

      <div
        className="app"
        style={{ direction: locale == "en" ? "ltr" : "rtl" }}
      >
        <PointchsHome />
        <Welcome />
        <Features />
        <WhyPointechs />
        <HowPointechsWorks />
        <PointechsApp />
      </div>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

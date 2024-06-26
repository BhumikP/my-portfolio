import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import "aos/dist/aos.css";
import Head from "next/head";
export default function Home() {
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const meta = {
    title: "Bhumik Prajapati - Software Engineer",
    description: `I've been working on Software development for 5 years straight. Get in touch with me to know more.`,
    image: "/titofCercle.png",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://anaflous.com`} />
        <link rel="canonical" href={`https://anaflous.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
       
        <Header
          finishedLoading={true}
          sectionsRef={homeRef}
        />
        <MyName finishedLoading={true} />
        <SocialMediaArround
          finishedLoading={true}
        />
          <AboutMe ref={aboutRef} />
       
        <WhereIHaveWorked /> 
       <SomethingIveBuilt /> 
       <GetInTouch /> 
          <Footer
            githubUrl={"https://github.com/hktitof/my-website"}
            hideSocialsInDesktop={true}
          />
       
      </div>
    </>
  );
}

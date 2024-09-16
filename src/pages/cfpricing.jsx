import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CFPricingBar from "../components/sections/CfPricingBar";
import Head from "next/head";
import { useEffect } from "react";

const Cfpricing = () => {
  useEffect(() => {
    document.title = 'Video Production Services & Cost in Delhi NCR | Content Foundry';
  }, []);

  return (
      <div>
        <Head>
            <title>Video Production Services & Cost in Delhi NCR | Content Foundry</title>
            <meta property="og:title" content="video production services & cost | content foundry" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.contentfoundry.in/cfpricing  " />
            <meta property="og:image" content="https://www.contentfoundry.in/images/logo-main.png" />
            <link rel="canonical" href="https://www.contentfoundry.in/cfpricing" />
            <meta name="description" content=":  Discover the top-tier video production services in Delhi NCR and their associated costs. 
            Elevate your brand with expertly crafted corporate videos at the in-house studio of Content Foundry. Check out pricing and services today!" />
        </Head>

    <Layouts contactButton cartButton>
      <PageBanner pageTitle={"Pick a plan that’s right for you"} pageDesc={"It helps you choose prices to maximise."} />
      <CFPricingBar hiddenHeading/>
    </Layouts>
    </div>
  );
};
export default Cfpricing;
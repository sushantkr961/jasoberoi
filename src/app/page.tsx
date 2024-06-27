import ContactJas from "@/components/homepage/ContactJas";
import Experience from "@/components/homepage/Experience";
import HeroSection from "@/components/homepage/HeroSection";
import Property from "@/components/homepage/Property";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '224717419404384');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=224717419404384&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>

      <HeroSection />
      <Experience />
      <ContactJas />
      <Property />
    </>
  );
}

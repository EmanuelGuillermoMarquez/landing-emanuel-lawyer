import Head from "next/head";
import Script from 'next/script'
import { Lexend , Montserrat} from 'next/font/google';
const font = Lexend({ subsets: ['latin'], weight: '400' });

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>{"Emanuel Marquez | Abogado | Santa Fe, Argentina"}</title>
            <meta name="description" content="Abogado especialista en accidentes de tránsito, resolución de conflictos civiles y defensas penales. Santa Fe, Argentina" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            {/* Metadata para SEO y redes sociales */}
            <meta property="og:title" content="Emanuel Marquez | Abogado | Santa Fe, Argentina" />
            <meta property="og:description" content="Abogado especialista en accidentes de tránsito, resolución de conflictos civiles y defensas penales. Santa Fe, Argentina" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/logo_square.png" />

            {/* Favicon */}
            <link rel="icon" href="/logo.png" />

            {/* Preload IMG */}
            <link rel="preload" as="image" href="/images/lawyer_banner.JPG" />
            <link rel="preload" as="image" href="/images/DSC_0145.JPG" />
            <link rel="preload" as="image" href="/images/DSC_0163.JPG" />

            {/* Google Ads Global Site Tag (gtag.js) */}
            <Script src={"https://www.googletagmanager.com/gtag/js?id=AW-17751695174"} strategy="afterInteractive" />
            <Script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-17751695174');
              `}
            </Script>
        </Head>
        <Script src="https://kit.fontawesome.com/199e38d7de.js" crossOrigin="anonymous" />
        <main className={font.className}>{children}</main>
    </>
  );
}

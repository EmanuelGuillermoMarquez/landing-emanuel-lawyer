import Head from "next/head";
import Script from 'next/script'
import { Lexend , Montserrat} from 'next/font/google';
const font = Lexend({ subsets: ['latin'], weight: '400' });

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>{"Emanuel Marquez Abogado"}</title>
            <meta
                name="description"
                content="Emanuel Marquez Abogado - Asesoría legal profesional en Santa Fe, Argentina"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            {/* Metadata para SEO y redes sociales */}
            <meta property="og:title" content="Emanuel Marquez Abogado" />
            <meta
              property="og:description"
              content="Emanuel Marquez Abogado - Asesoría legal profesional en Santa Fe, Argentina"
            />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/images/logo.png" />
            <meta property="og:url" content="https://tusitio.com" />

            {/* Favicon */}
            <link rel="icon" href="/logo.png" />

            <link rel="preload" as="image" href="/images/lawyer_banner.jpg" />
            <link rel="preload" as="image" href="/images/DSC_0145.jpg" />
        </Head>
        <Script src="https://kit.fontawesome.com/199e38d7de.js" crossOrigin="anonymous" />
        <main className={font.className}>{children}</main>
    </>
  );
}

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
            <meta name="google-site-verification" content="Gvc-Uizmo6b-KLPKEvVeNYf8ANQGTxLAG5xcmbMWMfY" />
            
            {/* Datos estructurados JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Attorney",
                  "name": "Emanuel Guillermo Marquez",
                  "image": "/images/lawyer_banner.webp",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "25 de Mayo 2126",
                    "addressLocality": "Santa Fe",
                    "addressRegion": "Santa Fe",
                    "postalCode": "3000",
                    "addressCountry": "AR"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -31.65122930590582,
                    "longitude": -60.70648833719594
                  },
                  "url": "https://emanuelmarquezabogado.vercel.app/",
                  "telephone": "+543424088190",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "08:00",
                      "closes": "20:00"
                    }
                  ]
                }),
              }}
            />

            {/* Favicon */}
            <link rel="icon" href="/logo.png" />

            {/* Preload IMG */}
            <link rel="preload" as="image" href="/images/lawyer_banner.webp" />
            <link rel="preload" as="image" href="/images/DSC_0145.webp" />
            <link rel="preload" as="image" href="/images/DSC_0163.webp" />

        </Head>
        {/* Google Ads Global Site Tag (gtag.js) */}
        <Script src={"https://www.googletagmanager.com/gtag/js?id=AW-17751695174"} async strategy="afterInteractive" />
        <Script id="google-ads-gtag" >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17751695174');
          `}
        </Script>
        <Script src="https://kit.fontawesome.com/199e38d7de.js" crossOrigin="anonymous" />
        <main className={font.className}>{children}</main>
    </>
  );
}

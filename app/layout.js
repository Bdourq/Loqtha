import { Tajawal } from 'next/font/google';
import { Amiri } from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-tajawal' });
const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-amiri' });

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${amiri.variable}`}>
      <head>
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="25jvrf2d053jsxy9z9mbfxgfdjt21x" />
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2696225470778827');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2696225470778827&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${tajawal.variable} ${amiri.variable}`}>
        {children}
      </body>
    </html>
  );
}

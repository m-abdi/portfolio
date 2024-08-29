import './globals.css';
import './fonts.css';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import localFont from 'next/font/local';

export const metadata = {
  title: 'Mehdi Abdi | Software Engineer',
  description: 'Portfolio and blog',
};

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/Rubik/Rubik-VariableFont_wght.ttf',
      style: 'noraml',
    },
    {
      path: '../public/fonts/Rubik/Rubik-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
     <Script id='matomo'>
{`  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matomo-e1ie-mahgd.liara.run/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();`}
        </Script>
      <Script>
        {`<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gd0iiosh3x");
</script>`}
      </Script>
      <body className={`${myFont.className}`}>
        <header className='py-2 sticky top-1 z-50'>
          <div
            className='transition-[background-color] hover:bg-[whitesmoke] border-[1px] rounded-[50%] bg-[white] w-[80px] h-[80px] flex flex-col items-center justify-center shadow-xl border-solid sticky top-3 mx-auto z-10'
            style={{ transitionTimingFunction: 'ease-out' }}
          >
            <Link href={'/'}>
              <Image
                src={'/images/M.svg'}
                width={40}
                height={40}
                className='object-contain'
                alt='Logo'
                loading='eager'
              />
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

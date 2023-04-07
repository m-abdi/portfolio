import './globals.css';
import './fonts.css';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
      <Head>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-9RLJ6J75KN'
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-9RLJ6J75KN');`}
        </script>
        <script>
          {`<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gd0iiosh3x");
</script>`}
        </script>
      </Head>
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

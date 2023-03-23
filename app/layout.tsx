import './globals.css';
import './fonts.css';

import Head from 'next/head';
import Script from 'next/script';

export const metadata = {
  title: 'Mehdi Abdi | Software Engineer',
  description: 'Portfolio and blog',
};

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
      <body>{children}</body>
    </html>
  );
}

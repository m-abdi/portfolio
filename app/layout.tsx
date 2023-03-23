import './globals.css';
import './fonts.css';

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
      <Script>
        {`<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gd0iiosh3x");
</script>`}
      </Script>
      <body>{children}</body>
    </html>
  );
}

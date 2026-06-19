import "./globals.css";
  import Script from 'next/script';
  
  import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} data-theme="light">
      <body>
  {/* Header/nav */} 
        {children}
{/* Footer */}

{/* Third party scripts */}
 

      </body>
    </html>
  );
}
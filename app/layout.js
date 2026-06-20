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
<footer className="bg-gray-900 text-gray-300 py-4 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <h2 className="text-white text-xl font-bold mb-3">Kijeda Tours</h2>
      <p className="text-sm">Tunaongoza safari za ndoto zako Zanzibar na Tanzania nzima.</p>
      <p className="text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} Kijeda Tours. All rights reserved.</p>
      <p className="text-xs text-gray-500">Created by GS Codestar</p>
    </div>
    <div>
      <h3 className="text-white font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-1.5">
        <li><a href="/" className="hover:text-orange-500 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-orange-500 underline-offset-4 text-sm">Home</a></li>
        <li><a href="/#dar-tour" className="hover:text-orange-500 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-orange-500 underline-offset-4 text-sm">Dar es Salaam Tours</a></li>
        <li><a href="/#zanzibar-tour" className="hover:text-orange-500 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-orange-500 underline-offset-4 text-sm">Zanzibar Tours</a></li>
        <li><a href="/#destinations" className="hover:text-orange-500 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-orange-500 underline-offset-4 text-sm">Destinations</a></li>
        <li><a href="/#faq" className="hover:text-orange-500 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-orange-500 underline-offset-4 text-sm">FAQ</a></li>
        <li><a href="/#reviews" className="hover:text-orange-500 transition-colors duration-300 ease-in-out underline decoration-transparent hover:decoration-orange-500 underline-offset-4 text-sm">Reviews</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-white font-semibold mb-3">Contact Us</h3>
      <div className="space-y-2 text-sm">
        <p>📍 Dar es Salaam, Tanzania</p>
        <p>📧 info@kijedatours.com</p>
        <p>📞 +255 773 753 292</p>
      </div>
    </div>
  </div>
</footer>
{/* Third party scripts */}
 <Script
          id="tawk-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/693347b229e54f197c444fba/1jbo504ou';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
           script
        />

      </body>
    </html>
  );
}
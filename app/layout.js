import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Oxanium } from 'next/font/google';
import './global.css';
import Footer from '@/app/Footer';
import Header from '@/app/Header';

export const metadata = {
  title: 'My Application',
  description: 'This is a sample application using Next.js',
};

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['400'], // puedes agregar otros: '300', '500', etc.
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

        </head>
      <body>
        <Header />
        <div className='page-container'>
        <div className='content-wrap'>
        {children}
        </div>
        <footer className='bg-footer'>
        <Footer />
        </footer>
        </div>
      </body>
    </html>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css'; 

import Footer from '@/app/Footer';
import Header from '@/app/Header';

export const metadata = {
  title: 'My Application',
  description: 'This is a sample application using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'My Application',
  description: 'This is a sample application using Next.js',
}

export default function RootLayout({ children }) {
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>)}
import { Inter } from 'next/font/google'
import { Header } from "app/components/shared/header";
import { Footer } from "app/components/shared/Footer";



const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

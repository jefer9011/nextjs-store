import { Playwrite_IN } from "next/font/google";
import { Header } from "app/components/shared/header";
import { Footer } from "app/components/shared/Footer";

const playwrite = Playwrite_IN({
  weight: ["100", "200", "300", "400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playwrite.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

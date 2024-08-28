import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@components/Nav";
import ReduxP from "@components/ReduxP";
import Footer from "@components/Footer";



const inter = Inter({ subsets: ["latin"],weight:'700' });

export const metadata = {
  title: "Mehrab Ecom",
  description: "Made by mehrab",
};

export default function RootLayout({ children }) {
  return (
    
      
    <html lang="en">
      
      <body className={`${inter.className} antialiased`}>
      <ReduxP>
        <Nav/>
        <main className="px-40 mt-7 min-h-screen">
        {children}
        </main>
        <Footer/>
        </ReduxP>
      </body>
      
    </html>
    
   
  );
}

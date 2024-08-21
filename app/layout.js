import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@components/Nav";
import { Provider } from "react-redux";
import { store } from "@redux/store";

const inter = Inter({ subsets: ["latin"],weight:'700' });

export const metadata = {
  title: "Mehrab Ecom",
  description: "Made by mehrab",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <Provider store={store}>
      <body className={`${inter.className} antialiased`}>
        <Nav/>
        <main className="px-40 mt-7">
        {children}
        </main>
      </body>
      </Provider>
    </html>
  );
}

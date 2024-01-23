import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

//imported fortawesome for this app icons instead of using local files that would then be packeged within code.

config.autoAddCss = false; //dont auto add CS default

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description: "Generated by Jorge",
};

export default function RootLayout({ children }) {
  //adding Nav here allos navigation on every page made.
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

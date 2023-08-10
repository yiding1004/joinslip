import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/navbar/Navbar';
import ClientOnly from "@/app/components/ClientOnly";
import ToasterProvider from '@/app/providers/ToasterProvider';
import ModalsProvider from "@/app/providers/ModalsProvider";
import getCurrentUser from '@/app/actions/getCurrentUser';


export const metadata = {
  title: "JoinSlip",
  description: "Interative Roster for Activities and Groups",
  name: "viewport", 
  content: "initial-scale=1, width=device-width"
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser(); 

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <ModalsProvider />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pt-[73px]">{children}</div>
      </body>
    </html>
  );
}

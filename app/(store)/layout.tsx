
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Navbar from "@/components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider dynamic>
      <html lang="en">
      <body
        
      >
        <Navbar/>
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}

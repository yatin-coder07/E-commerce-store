

import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
      <body
        
      >
        {children}
      </body>
    </html>
   </ClerkProvider>
   

  );
}


export const metadata ={
    title: 'next.js',
    description:'created with next.js'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
      <html lang="en">
        <head/>
      <body
        
      >
        {children}
      </body>
    </html>
 
  );
}

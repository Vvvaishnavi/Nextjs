import React from "react";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor:"ghostwhite",
          padding:"10px",
        }}>
          <p>Header</p>
        </header>
        
        
        {children}
        <footer
        style={{
          backgroundColor:"skyblue",
          padding:"1rem",
        }}>
          <p>Footer</p>
        </footer></body>
        
    </html>
  )
}

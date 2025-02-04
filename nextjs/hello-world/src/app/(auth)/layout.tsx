"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
const navLinks =[
    {name: "Register", href:"/registration"},
    {name: "Login", href:"/login"},
    {name: "Forgot password", href:"/forgot-password"}
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  
  return (
      <div>
          {navLinks.map((link) =>{
            const isActive = pathname.startsWith(link.href);
              return(
              <Link href={link.href} key={link.name}
              className={isActive?"text-green-700 font-bold mr-4" : "text-blue-500 mr-6"}
              >
              {link.name}
              </Link>
          );
          })}
          {children}
      </div>
);}
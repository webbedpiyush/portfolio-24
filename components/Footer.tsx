"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiFolder2Line, RiLinkM, RiPhoneLine, RiSquareLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Footer() {
  const pathname = `/ ${usePathname().split("/")[1]}`;
  console.log(pathname);

  const navItems = [
    { href: "/", icon: RiSquareLine, label: "Home" },
    { href: "/projects", icon: RiFolder2Line, label: "Projects" },
    { href: "/socials", icon: RiLinkM, label: "Socials" },
    { href: "/contact", icon: RiPhoneLine, label: "Contact" }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4">
      <nav className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="dark:text-gray-200 text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            <motion.div whileHover={{y:-2}}
            whileTap={{scale : 0.95}}>
              <item.icon className="w-6 h-6 "/>
              {pathname === item.href && <motion.div />}
            </motion.div>
          </Link>
        ))}
      </nav>
    </footer>
  );
}

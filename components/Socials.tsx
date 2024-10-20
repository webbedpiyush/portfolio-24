"use client";
import { SocialLink, socialLinks } from "@/utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export function SocialLinkItem({
  link,
  index,
}: {
  link: SocialLink;
  index: number;
}) {
  return (
    <motion.div
      className="flex items-center pb-2 mb-2 space-x-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={link.href} target="_blank" >
        <h3 className="text-sm font-semibold mb-0 flex items-center justify-center gap-3 hover:underline hover:underline-offset-4">
          <link.icon className="text-gray-600 dark:text-gray-400 text-xl w-7 h-7" />
          <span>{link.name}</span>
        </h3>
      </Link>
    </motion.div>
  );
}

export function Socials() {
  return (
    <div className=" sm:grid flex flex-col sm:justify-center sm:items-center md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
      {socialLinks.map((link, index) => (
        <SocialLinkItem key={index} link={link} index={index} />
      ))}
    </div>
  );
}

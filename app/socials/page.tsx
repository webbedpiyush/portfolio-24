import {Socials }from "@/components/Socials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socials - Piyush",
};

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] p-5 mt-4">
      <Socials />
    </main>
  );
}

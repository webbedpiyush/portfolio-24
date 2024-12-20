"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { useEffect, useState } from "react";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const pathname = usePathname();

  useEffect(function () {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return function () {
      clearInterval(timer);
    };
  }, []);

  function getTimeString() {
    return (
      currentTime.getHours().toString().padStart(2, "0") +
      ":" +
      currentTime.getMinutes().toString().padStart(2, "0") +
      ":" +
      currentTime.getSeconds().toString().padStart(2, "0")
    );
  }

  function getBreadcrumbs() {
    const pathSegments = pathname
      .split("/")
      .slice(0, 2)
      .filter((segment) => segment !== "");

    let breadcrumbs = [{ name: "Piyush Tiwari", path: "/" }];

    pathSegments.forEach((segment, index) => {
      breadcrumbs.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: "/" + pathSegments.slice(0, index + 1).join("/"),
      });
    });
    return breadcrumbs;
  }
  return (
    <div className="fixed top-0 w-full md:w-[80%] lg:w-[50%] bg-opacity-70 backdrop-blur-md transition-colors duration-300 z-10">
      <header className="flex p-2 sm:p-4 mx-2 sm:mx-0 justify-between items-center max-w-full">
        <nav className="ml-2 sm:ml-0">
          <ul className="flex flex-wrap items-center justify-center sm:justify-start space-x-1 sm:space-x-1 text-sm sm:text-base">
            {getBreadcrumbs().map((breadcrumb, index) => (
              <li key={breadcrumb.path} className="flex items-center">
                <Link href={breadcrumb.path}>{breadcrumb.name}</Link>
                {index < getBreadcrumbs().length - 1 && <span>/</span>}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <ThemeSwitcher />
          <div className="text-sm sm:text-base" suppressHydrationWarning>
            {getTimeString() + " IST"}
          </div>
        </div>
      </header>
      <div className="w-full h-px bg-gray-200 dark:bg-gray-700 transition-colors duration-300"></div>
    </div>
  );
}

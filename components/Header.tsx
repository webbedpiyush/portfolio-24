"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { useEffect, useState } from "react";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
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
    const breadcrumbs = [{ name: "Piyush Tiwari", path: "/" }];
    pathSegments.forEach((segment, index) => {
      breadcrumbs.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: "/" + pathSegments.slice(0, index + 1).join("/"),
      });
    });
    return breadcrumbs;
  }

  return (
    <div className="fixed top-0 w-full md:w-[80%] lg:w-[50%] bg-white/10 dark:bg-black/10 backdrop-blur-md transition-colors duration-300 z-10 border-b border-white/20 dark:border-gray-700/30">
      <header className="flex p-2 sm:p-4 mx-2 sm:mx-0 justify-between items-center max-w-full">
        <nav className="ml-2 sm:ml-0">
          <ul className="flex flex-wrap items-center justify-center sm:justify-start space-x-1 sm:space-x-1 text-sm sm:text-base">
            {getBreadcrumbs().map((breadcrumb, index) => (
              <li key={breadcrumb.path} className="flex items-center">
                <Link
                  href={breadcrumb.path}
                  className={`transition-colors duration-200 hover:text-blue-400 ${
                    index === 0
                      ? "font-normal text-slate-800 dark:text-slate-200"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                  style={
                    index === 0
                      ? {
                          fontFamily:
                            '"Instrument Serif", "Instrument Serif Fallback", serif',
                          fontSize: "24px",
                          lineHeight: "32px",
                          fontWeight: 400,
                        }
                      : {}
                  }>
                  {breadcrumb.name}
                </Link>
                {index < getBreadcrumbs().length - 1 && (
                  <span className="mx-2 text-slate-600 dark:text-slate-400">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
          {/* Subtitle */}
          <div className="ml-2 sm:ml-0 mt-1">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light tracking-wide">
              Dev ◇ Creator ◇ Builder
            </p>
          </div>
        </nav>
        <div className="flex gap-x-4 items-center">
          <ThemeSwitcher />
          <div
            className="text-sm sm:text-base text-slate-700 dark:text-slate-300"
            suppressHydrationWarning>
            {getTimeString() + " IST"}
          </div>
        </div>
      </header>
    </div>
  );
}

import Link from "next/link";
// import BurgerMenu from "./BurgerMenu";
// import WhatIsSoil from "./WhatIsSoil";
import { LoginButton } from "ui";

export const AppHeader = ({}) => {
  return (
    <header className="z-10 border-b bg-white shadow-lg shadow-slate-500/10">
      <nav className="h-16 w-full px-4  sm:px-5 lg:px-6" aria-label="Top">
        <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
          <Link href="/">
            <a>
              <span className="text-xl">🌱</span>
              <span className="text-darkGreen ml-2 text-2xl font-bold">
                Eden.
              </span>
            </a>
          </Link>
          <LoginButton />
        </div>
      </nav>
    </header>
  );
};

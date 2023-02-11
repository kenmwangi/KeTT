import Link from "next/link";
import React, { useRef, useState } from "react";

import { BsStack } from "react-icons/bs";
import { RxGear } from "react-icons/rx";

import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import {
  FiBarChart2,
  FiAlertTriangle,
  FiUsers,
  FiMessageCircle,
} from "react-icons/fi";

const dashboardNavs = [
  { id: 1, icon: <BsStack />, title: "Projects", href: "/dashboard" },
  { id: 2, icon: <FiBarChart2 />, title: "Issues", href: "/dashboard/issues" },
  {
    id: 3,
    icon: <FiAlertTriangle />,
    title: "Alerts",
    href: "/dashboard/alerts",
  },
  { id: 4, icon: <FiUsers />, title: "Users", href: "/dashboard/users" },
  { id: 5, icon: <RxGear />, title: "Settings", href: "/dashboard/settings" },
];

const NAV_OPEN_WIDTH = "w-60";
const NAV_CLOSE_WIDTH = "w-12";
const NAV_VISIBILITY = "nav-visibility";

const DashboardNav = () => {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const toggleNav = (visibility: boolean) => {
    const currentNav = navRef.current;
    if (!currentNav) return;

    const { classList } = currentNav;
    if (visibility) {
      // hide our nav
      classList.remove(NAV_OPEN_WIDTH);
      classList.add(NAV_CLOSE_WIDTH);
    } else {
      // show our nav
      classList.add(NAV_OPEN_WIDTH);
      classList.remove(NAV_CLOSE_WIDTH);
    }
  };

  const updateNavState = () => {
    toggleNav(open);
    const newState = !open;
    setOpen(newState);
    localStorage.setItem(NAV_VISIBILITY, JSON.stringify(newState));
  };

  React.useEffect(() => {
    const navState = localStorage.getItem(NAV_VISIBILITY);
    if (navState !== null) {
      const newState = JSON.parse(navState);
      setOpen(newState);
      toggleNav(!newState);
    } else {
      setOpen(true);
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-secondary-light flex h-screen w-60 flex-col justify-between overflow-hidden bg-slate-900  text-white shadow-sm transition-width"
    >
      <div className="flex flex-col justify-between">
        <Link
          href="/dashboard"
          className="mb-10 flex items-center space-x-2 p-3"
        >
          <BsStack />
          {open && <span className="text-xl font-bold leading-none">KeTT</span>}
        </Link>

        <div className="mt-10 space-y-6">
          {dashboardNavs.map((dashboardNav) => {
            const { id, href, title, icon } = dashboardNav;
            return (
              <Link
                key={id}
                href={href}
                className="text-md flex items-center p-3 transition hover:scale-95 hover:bg-transparent hover:text-slate-100 md:text-lg lg:text-xl"
              >
                <div>{icon}</div>
                {open && <span className="ml-2 leading-none">{title}</span>}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <Link
          href="/dashboard/support"
          className="text-md flex items-center p-3 transition hover:scale-95 hover:bg-transparent hover:text-slate-100 md:text-lg lg:text-xl"
        >
          <FiMessageCircle />
          {open && <span className="ml-2 leading-none">Support</span>}
        </Link>
        {/* Nav toggler */}

        <button
          onClick={updateNavState}
          className="self-end p-3 transition hover:scale-95"
        >
          {open ? <RiMenuFoldFill size={25} /> : <RiMenuUnfoldFill size={25} />}
        </button>
      </div>
    </nav>
  );
};

export default DashboardNav;

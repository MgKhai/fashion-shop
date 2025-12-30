import { useState } from "react";
import { Link, NavLink } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="bg-sky-600 p-4 text-white">
        <nav className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold">
            Fashion Shop
          </Link>

          <p className="block text-3xl lg:hidden" onClick={toggleMenu}>
            &#8801;
          </p>

          {/* Desktop view navigation */}
          <ul className="hidden gap-6 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-gray"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-grey"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-gray"
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>

          {/* Mobile view navigation */}
          <div
            className={`fixed inset-0 z-50 transform bg-sky-600/80 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`}
          >
            <div
              className="fixed right-0 cursor-pointer p-4 text-2xl"
              onClick={toggleMenu}
            >
              X
            </div>
            <div className="flex h-full flex-col items-center justify-center gap-4 text-2xl">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="shop" onClick={toggleMenu}>
                Shop
              </Link>
              <Link to="cart" onClick={toggleMenu}>
                Cart
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import owlLogo from "./owl3.png";

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true, isPage: true },
    { name: 'Artist', href: '/artist', current: false, isPage: true },
    { name: 'Chat', href: '/chatbot', current: false, isPage: true },
    { name: 'DEX', href: 'dex', current: false, isPage: false },
    { name: 'Roadmap', href: 'roadmap', current: false, isPage: false },
    { name: 'Features', href: 'features', current: false, isPage: false },
    { name: 'Token', href: 'token', current: false, isPage: false },
  ]);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigationClick = (itemIdx, item) => {
    setNavigation(navigation.map((navItem, index) => ({
      ...navItem,
      current: index === itemIdx,
    })));
    handleLinkClick(item);
  };

  const handleLinkClick = (item) => {
    if (item.isPage) {
      navigate(item.href);
    } else if (location.pathname === '/') {
      // Use ScrollLink functionality if on the home page
      const scrollLink = document.querySelector(`a[href='${item.href}']`);
      scrollLink?.click();
    } else {
      // Navigate to home page and then scroll to the section
      navigate('/');
      setTimeout(() => {
        const scrollLink = document.querySelector(`a[href='${item.href}']`);
        scrollLink?.click();
      }, 100);
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as="nav" className="fixed inset-x-0 top-0 z-30 bg-transparent text-white bg-opacity-90 backdrop-filter backdrop-blur-lg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Logo and title */}
              <div className="flex items-center px-2 lg:px-0">
                <img
                  className="h-20 w-20 rounded-full"
                  src={owlLogo}
                  alt="BITWIT"
                />
                <span className="text-xl font-bold text-cybernoir-text ml-2">
                  <span className="text-cybernoir-accent">BIT</span>WIT
                </span>
              </div>

              {/* Navigation links */}
              <div className="hidden sm:flex sm:space-x-4">
                {navigation.map((item, itemIdx) => {
                  const LinkComponent = item.isPage ? RouterLink : ScrollLink;
                  return (
                    <LinkComponent
                      key={item.name}
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={classNames(
                        'text-sm font-medium rounded-md px-3 py-2 transition-colors duration-150 ease-in-out',
                        item.current
                          ? 'bg-cybernoir-hover text-cybernoir-text'
                          : 'text-cybernoir-text hover:bg-cybernoir-accent hover:text-white'
                      )}
                      onClick={() => handleNavigationClick(itemIdx, item)}
                      {...(item.isPage ? {} : { activeClass: 'active', isDynamic: true })}
                    >
                      {item.name}
                    </LinkComponent>
                  );
                })}
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-cybernoir-text hover:bg-cybernoir-accent hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  as="a"
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    'block px-3 py-2 rounded-md text-base font-medium text-cybernoir-text hover:bg-cybernoir-accent hover:text-white',
                    item.current ? 'bg-cybernoir-hover' : ''
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => handleNavigationClick(item)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

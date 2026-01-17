'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import { ToggleTheme } from '@/components/theme/theme-toggle';
import AnnouncementBar from '@/components/app/announcement-bar';

export function PNavbar() {
  const navItems = [
    // {
    //   name: 'Products',
    //   link: '/#products',
    // },
    // {
    //   name: 'Pricing',
    //   link: '/#pricing',
    // },
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'New Arrivals',
      link: '/new-arrivals',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // <div className="relative w-full">
    <Navbar>
      <AnnouncementBar />
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
          <div className="relative cursor-pointer">
            <ToggleTheme></ToggleTheme>
          </div>
          <NavbarButton variant="primary">Shop Now</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <div className="relative cursor-pointer">
              <ToggleTheme></ToggleTheme>
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton variant="primary">Shop Now</NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
    // </div>
  );
}

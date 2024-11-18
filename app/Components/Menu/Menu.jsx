'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const menulinks = [
  { path: '/', label: '- Product' },
  { path: '/', label: '- Company' },
  { path: '/', label: '- FAQ' },
];

function Menu() {
  const ButtonRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    const widthValue = window.innerWidth >= 1024 ? '20vw' : '95vw';

    if (isMenuOpen) {
      tl.to(ButtonRef.current, {
        duration: 0.2,
        ease: 'power2.inOut',
      });
      tl.to(menuRef.current, {
        width: widthValue,
        height: '35vh',
        duration: 0.5,
        ease: 'power2.inOut',
      });
      tl.to(linksRef.current, { opacity: 0, duration: 0.2, ease: 'power2.out' });
      tl.to(linksRef.current, { opacity: 1, duration: 0.2, stagger: 0.2, ease: 'power2.out' });
    } else {
      tl.to(linksRef.current, { opacity: 0, duration: 0.3, stagger: 0.2 });
      tl.to(
        menuRef.current,
        {
          width: '0',
          height: '0',
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            menuRef.current.style.overflow = 'hidden';
          },
        },
        '<',
      );

      tl.to(ButtonRef.current, {
        duration: 0.2,
        ease: 'power2.inOut',
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="fixed z-[100] flex justify-end top-[3%] h-full w-full pointer-events-none">
      <button
        className="absolute bg-zinc-800 text-white px-4 py-2 top-[2%] right-[2%] rounded-full flex items-end h-[40px] w-[40px] z-[100] overflow-hidden pointer-events-auto"
        onClick={toggleMenu}
      >
        <div ref={ButtonRef} className="flex h-full items-center justify-center flex-col ">
          <span className="flex h-full w-full items-center justify-center text-base">
            {isMenuOpen ? '-' : '='}
          </span>
        </div>
      </button>
      <div
        ref={menuRef}
        className="h-0 w-0 overflow-hidden rounded-[20px] z-50 bg-zinc-800"
        style={{
          transition: 'width 0.5s ease, height 0.5s ease',
          right: '2%',
          position: 'fixed',
          top: '5%',
        }}
      >
        <ul className="flex h-full w-full flex-col items-start justify-center p-[5%] pointer-events-auto">
          {menulinks.map((link, index) => (
            <li
              key={index}
              ref={el => (linksRef.current[index] = el)}
              className="my-2 pointer-events-auto"
            >
              <Link
                href={link.path}
                className="text-white text-xl lg:text-3xl hover:underline transition-all ease-in duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;

import React, {useState} from 'react';
import Link from 'next/link';

export function Navbar({children}: {children: React.ReactNode}) {
  return <ul className="navbar-nav">{children}</ul>;
}

export function NavbarLeft({children}: {children: React.ReactNode}) {
  return <ul className="navbar-nav-left">{children}</ul>;
}

export function NavItemText({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const slug: string = text;

  return (
    <li
      id={text}
      key={text}
      className="nav-item-text"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={e => {
        if (!e.relatedTarget) {
          return;
        }
        if (e.currentTarget instanceof Node && !e.currentTarget.contains(e.relatedTarget as any)) {
          setOpen(false);
        }
      }}>
      <Link href={`/${slug.toLowerCase()}`} passHref>
        <a id={`${text}-button`} className="text-button">
          {text}
        </a>
      </Link>
      {open && children}
    </li>
  );
}

export function NavItemIcon({
  icon,
  children,
}: {
  icon: JSX.Element;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="nav-item-icon"
      onMouseEnter={() => setOpen(!open)}
      onMouseLeave={(event: React.MouseEvent) => {
        if (event === null) {
          return;
        }

        const {currentTarget, relatedTarget} = event;

        if (!currentTarget || !relatedTarget) {
          return;
        }

        if (
          !(currentTarget as HTMLLIElement).contains(
            relatedTarget as HTMLLIElement,
          )
        ) {
          setOpen(false);
        }
      }}>
      <a href="#" className="icon-button">
        {icon}
      </a>
      {open && children}
    </li>
  );
}

import React, {useState} from 'react';
import Link from 'next/link';

export function Navbar(props) {
  return <ul className="navbar-nav">{props.children}</ul>;
}

export function NavbarLeft(props) {
  return <ul className="navbar-nav-left">{props.children}</ul>;
}

export function NavItemText(props) {
  const [open, setOpen] = useState(false);
  const slug: string = props.text as string;

  return (
    <li
      id={props.text}
      key={props.text}
      className="nav-item-text"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={e => {
        if (!e.relatedTarget) {
          return;
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}>
      <Link href={`/${slug.toLowerCase()}`} passHref>
        <a id={`${props.text}-button`} className="text-button">
          {props.text}
        </a>
      </Link>
      {open && props.children}
    </li>
  );
}

export function NavItemIcon(props) {
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
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

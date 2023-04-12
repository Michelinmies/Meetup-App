import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups!</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link href='/api/auth/login'>Login</Link>
          </li>
          <li>
            <Link href='/api/auth/logout'>Logout</Link>
          </li>
          <li>
            <Link href='/api/auth/me'>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

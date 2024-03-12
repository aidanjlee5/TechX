// components/Sidebar.js

import Link from 'next/link';
import styles from './Sidebar.css';

const Sidebar = () => (
  <div className={styles.sidebar}>
    <Link href="/"> Home</Link>
    <Link href="/app-router">App Router</Link>
    <Link href="/server-components">Server Components</Link>
    <Link href="/file-def">File Def</Link>
  </div>
);

export default Sidebar;
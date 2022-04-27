import Link from "next/Link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className="hello">Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}

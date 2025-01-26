
import Link from "next/link"
import styles from "./header.module.sass";
export const Header = () => {
    return (
        <header className={styles.header}>
        <nav>
            <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/store">Categories</Link></li>
            <li><Link href="/store/tech">Tech</Link></li>
            </ul>
        </nav>
        </header>
    )
}
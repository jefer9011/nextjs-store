
import Link from "next/link"

export const Header = () => {
    console.log("Header SSR initial page");
    return (
        <header>
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
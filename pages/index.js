import Link from "next/link"
import { useRouter } from "next/router";

function Home() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/product");
    }
    return (
        <>
            <h1>home page</h1>
            <Link href="/profile">
                <a>profile</a>
            </Link>
            <br />
            <Link href="/product">
                <a>product</a>
            </Link>
            <br />
            <button onClick={handleClick}>
                order now
            </button>
            <br />
            <Link href="/dashboard">
                <a>404.js will be render if page not found</a>
            </Link>

        </>
    )
}

export default Home;
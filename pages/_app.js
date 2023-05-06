import Link from "next/link"
import {useRouter} from "next/router"
import "../styles/global.css"

export default function App({Component, pageProps}) {
    const router = useRouter()

    return (
        <>
            <div>
                <nav className="flex justify-between items-center flex-wrap p-6 bg-black">
                    <div>
                        <ul className="flex justify-between space-x-9 text-white">
                            <li>
                                <h1 className="font-semibold text-3xl">Liam's RL Bot Hub</h1>
                            </li>
                            <li>
                                <a className="block lg:inline-block hover:text-blue-500 font-sans text-xl" href="/">Home</a>
                            </li>
                            <li>
                                <a className="block lg:inline-block hover:text-blue-500 font-sans text-xl" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Component {...pageProps} />
        </>
    )
}
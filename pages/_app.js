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
                        <ul className="flex justify-between">
                            <li className="mr-9">
                                <h1 className="text-white font-semibold text-3xl">Liam's RL Bot Hub</h1>
                            </li>
                            <li className="mr-9">
                                <a className="block lg:inline-block text-white hover:text-blue-500 font-sans text-xl" href="/">Home</a>
                            </li>
                            <li className="mr-9">
                                <a className="text-white block lg:inline-block hover:text-blue-500 font-sans text-xl" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Component {...pageProps} />
        </>
    )
}
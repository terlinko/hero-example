import Link from "next/link";

const NavBar = ()=>{
    return(
    <nav className="z-50 fixed top-0 left-0 w-full h-16 bg-black text-white flex items-center justify-between bg-opacity-95">
        <div className="p-2 italic mx-4 text-2xl">
            <Link href='/'>KTS</Link>
        </div>
        <div>
            <ul className="flex gap-2 mx-4 text-lg">
                <li className="p-2"><Link href='/about'>about</Link></li>
            </ul>
        </div>
    </nav>)
}

export default NavBar;
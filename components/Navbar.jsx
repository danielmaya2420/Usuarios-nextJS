import Link from "next/link"

function Navbar(){
    return (
        <nav className="bg-slate-400 mb-4 flex justify-between item-center px-20 p-3
        font-bold text-black">
            <Link href="/">
                Home
            </Link>

        </nav>
    )
}
export default Navbar
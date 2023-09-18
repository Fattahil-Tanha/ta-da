import Link from "next/link"


const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-full  h-fit p-12 px-8 sm:p-2 ">
      <Link href='/'><h1 className="text-xl cursor-pointer" >Ta-Da</h1></Link>
      <Link className="text-base border border-slate-500 p-3 hover:bg-slate-700 duration-300 ease-in-out rounded-lg" href={"/createtopic"}>Create-task</Link>
    </nav>
  )
}

export default Nav

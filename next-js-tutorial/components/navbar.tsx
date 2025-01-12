import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-4 text-2xl bg-gray-800 text-white">
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/info"}>Info</Link>
        </div>
        <div className="flex gap-4">
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

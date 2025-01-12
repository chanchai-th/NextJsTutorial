import Link from "next/link";

const NavPage = () => {
  return (
    <>
      <nav>
        <div className="flex gap-4 text-2xl">
          <Link href="/">Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/info"}>Info</Link>
        </div>
      </nav>
    </>
  );
};
export default NavPage;

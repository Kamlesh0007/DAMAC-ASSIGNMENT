import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
            <div className="max-w-6xl mx-auto flex justify-between items-center py-8 sm:py-12 bg-transparent ">
              <Link href="/">
                <Image src="/logo.png" alt="Damac" width={160} height={50} />
              </Link>
              <button className="uppercase sm:block hidden text-sm font-semibold text border-2 border-[#17ABFF] rounded-md px-6 sm:px-10 py-3 backdrop-blur hover:bg-[#17ABFF]/50 hover:text-white transition">
                Enquire Now
              </button>
              <Image className="md:hidden block"  src="/hamberger.svg" alt="Damac-menu" width={30} height={50} />
            </div>
          </nav>
    </header>
  );
};

export default Navbar;

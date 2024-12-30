import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/banner-logo.png";

export function Header() {
  return (
    <header className="px-4 h-[50px] flex items-center">
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          title="리모트 마인드"
          height={48}
          width={200}
          className="h-[24px] w-auto md:h-[32px] object-contain"
        />
      </Link>
    </header>
  );
}

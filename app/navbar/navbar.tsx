import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-20 right-0 left-0 pt-8 pb-8 pr-16 pl-16 flex justify-between items-center w-1/2 ml-auto mr-auto bg-[rgba(42,43,56,.5)] border-[.2rem] border-solid border-[#2a2b37] backdrop-blur-[104px] rounded-[2rem]">
        <span className="uppercase bold font-[family-name:var(--font-markPro)] text-xl">Shivam Singh</span>
            <div className="link-container w-1/2 flex flex-row justify-between items-center font-[family-name:var(--font-geist-sans)] text-base cursor-pointer">
                <Link href="/">About</Link>
                <Link href="">Projects</Link>
                <Link href="/experience">Experience</Link>
                <Link href="">Skills</Link>
                <Link href="">Resume</Link>
                <Link href="">Contact</Link>
            </div>
    </div>);
}
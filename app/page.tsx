import Image from "next/image";

export default function Home() {
    return (
        <div
            className="min-h-screen font-[family-name:var(--font-markPro)]">
            <main className="snap-y snap-mandatory h-screen overflow-y-auto">
                <div className="header-wrapper flex flex-col justify-center snap-start h-screen">
                    <header className="flex flex-row justify-around text-5xl">
                        <div className="flex flex-col justify-center">
                            <span className="font-[family-name:var(--font-geist-sans)] text-2xl mb-6">Welcome to my personal website!</span>
                            <span>Hey folks, I&apos;m Shivam. </span>
                            <div className="flex flex-row gap-4">
                                <span>I&apos;m a</span>
                                <div id="flip">
                                    <div className="header__hero--heading-gradient">
                                        <div className="header__hero--heading-gradient">Software Engineer</div>
                                    </div>
                                    <div className="header__hero--heading-gradient">
                                        <div className="header__hero--heading-gradient">Full Stack Developer</div>
                                    </div>
                                </div>
                                {" "}
                            </div>
                            <div className="flex flex-col font-[family-name:var(--font-geist-mono)] text-xl mt-8">
                                <span>Building scalable and efficient web applications is a challenge.</span>
                                <span>I am highly energetic in web development with extensive knowledge<br/>of both frontend and backend systems.</span>
                            </div>
                        </div>
                        <Image className="rounded-[10em]" src="/images/portfolio-image.jpg" alt="Portfolio Image"
                               width="500" height="300"/>
                    </header>
                </div>
                <div className="header-wrapper flex flex-col justify-center snap-start h-screen">
                    <header className="flex flex-row justify-around text-5xl">
                        <Image src="/images/undraw_developer.svg" alt="undraw developer" width="500" height="300"/>
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row gap-4">
                                <span>turning ideas into  real life </span>
                                <div id="flip">
                                    <div className="header__hero--heading-gradient">
                                        <div className="header__hero--heading-gradient">products</div>
                                    </div>
                                    <div className="header__hero--heading-gradient">
                                        <div className="header__hero--heading-gradient">solution</div>
                                    </div>
                                </div>
                            </div>
                            <span>is my calling.</span>
                            <div
                                className="flex flex-col font-[family-name:var(--font-geist-mono)] text-xl mt-8 italic">
                                <span>“I am passionate about transforming innovative ideas into tangible, real-world products.<br/>
                                    With a strong foundation in both frontend and backend development,<br/>
                                    I excel at creating comprehensive solutions that not only meet user needs<br/>
                                    but also exceed expectations.<br/>
                                    My journey is driven by a commitment to turning visionary concepts into functional,<br/>
                                    impactful products that solve real problems and enhance everyday life.”</span>

                            </div>
                        </div>
                    </header>
                </div>
            </main>
            <footer className="flex flex-wrap items-center justify-center">
                Contact me
            </footer>
        </div>
    );
}

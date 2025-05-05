import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
    return (
        <>
            <section
                id="about"
                className="py-16 md:py-32  text-white bg-[#04081A]"
            >
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                    <h2 className="relative z-10 max-w-xl text-4xl f    ont-medium lg:text-5xl text-white">
                        Developer, Designer, Creator, Innovator
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                        <div className="relative col-span-2 md:col-span-1 mb-6 sm:mb-0">
                            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                                <img
                                    src={HeroImg}
                                    className="rounded-[15px] shadow block"
                                    alt="payments illustration"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>

                        <div className="relative col-span-2 md:col-span-1 space-y-4">
                            <p className="text-white">
                                Hello! I'm Mohamed Mounir, a dedicated
                                JavaScript developer with a strong focus on
                                building scalable, secure, and responsive web
                                applications using modern technologies like
                                React, Angular, and TypeScript. I’ve contributed
                                to several robust governmental projects that
                                demand high standards of performance,
                                accessibility, and maintainability. My
                                experience also includes dynamic platforms like
                                Roamify, Fresh-Cart, and Book Shelf, where I’ve
                                crafted smooth user experiences and clean,
                                modular code aligned with best practices.
                            </p>
                            <p className="text-white">
                                My focus is on making web development faster,
                                easier, and accessible to all developers.
                                Currently, I'm expanding into backend
                                development to grow as a full-stack developer
                                and create seamless, robust web applications.
                            </p>

                            <div className="pt-6">
                                <blockquote className="border-l-4 border-gray-300 pl-4">
                                    <p className="text-white">
                                        I'm a lifelong learner and a strong
                                        believer in clean code, reusability, and
                                        best practices. Whether it’s solving UI
                                        challenges or integrating complex APIs,
                                        I’m always eager to learn, build, and
                                        improve. My goal is to contribute to
                                        impactful tech solutions and grow as a
                                        developer who delivers real value to
                                        users and teams.
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        <cite className="block font-medium text-white">
                                            Mohamed Mounir
                                        </cite>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

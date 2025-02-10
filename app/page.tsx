import Image from "next/image";
import { Download, Mail, MapPin, Linkedin } from "lucide-react";
import Link from "next/link";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import ScrollSection from "@/components/scroll-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center relative overflow-hidden w-full min-h-[100dvh]">
      <header className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col justify-center w-full h-full">
          <div className="flex pt-16 gap-4 w-full">
            <div className="w-[120px] h-[120px] relative">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={120}
                height={120}
                className="rounded-md absolute top-0 left-0 w-full h-full object-cover shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-medium">Đào Văn Nhâm</h1>
              <p className="text-gray-600">Software Engineer</p>
              <p className="flex items-center gap-1 text-gray-500">
                <MapPin className="size-4" />
                <span className="text-sm">Hanoi, Vietnam</span>
              </p>
              <p className="flex items-center gap-2 text-gray-500">
                <span className="size-2 bg-green-500 rounded-full" />
                <span className="text-sm">Available for work</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-1 justify-end items-end">
              <div className="flex flex-col gap-2 items-end">
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-md cursor-pointer"
                >
                  <Download className="size-4" />
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2 border-t pt-4 mt-4 border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Mail className="size-4" />
              daonham95@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Linkedin className="size-4" />
                <Link
                  href="https://www.linkedin.com/in/nh%C3%A2m-%C4%91%C3%A0o-03a561136/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700"
                >
                  NhamDao
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <img src="/x.svg" alt="X" className="size-4" />
                <Link
                  href="https://x.com/Nhamkin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700"
                >
                  Nhamkin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="about" className="max-w-3xl w-full mx-auto mt-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">About me</h2>
          <div className="flex flex-col gap-2">
            <article className="prose max-w-none">
              <p>
                I am a Developer with 8 years of experience in web and mobile
                development, specializing in both frontend and backend
                technologies. Throughout my career, I have contributed to a wide
                range of projects, from startups to enterprise-level
                applications, building scalable, high-performance solutions that
                enhance user experience.
              </p>
              <p>
                With a strong foundation in JavaScript/TypeScript, I am
                proficient in modern technologies such as React, Next.js, and
                Remix on the frontend, as well as NestJS, Express.js, and
                Node.js on the backend. Additionally, I have experience working
                with React Native to develop cross-platform mobile applications.
                I always strive to apply best practices and optimal software
                architectures to ensure a clean, maintainable, and scalable
                codebase.
              </p>
              <p>
                Beyond technical expertise, I value teamwork, effective
                communication, and continuous learning. I am passionate about
                solving complex problems, improving system performance, and
                enhancing user experience through innovative technology
                solutions.
              </p>
              <p>
                I am eager to work in a dynamic environment where I can
                contribute my skills to building high-quality products while
                continuously growing as a developer.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="skills" className="max-w-3xl w-full mx-auto mt-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Skills</h2>
          <div className="flex flex-col gap-2">
            <ul className="text-gray-700 text-base flex flex-col gap-2">
              <li className="flex gap-2.5">
                <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                <span className="flex-1">
                  <span className="font-medium">Frontend:</span> ReactJS,
                  NextJS, Remix, NestJS, ExpressJS, React Native, Expo, Redux,
                  Redux Toolkit, Vite...
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                <span className="flex-1">
                  <span className="font-medium">CSS:</span> TailwindCSS, CSS
                  Modules.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                <span className="flex-1">
                  <span className="font-medium">Backend:</span> NodeJS, NestJS,
                  ExpressJS, Golang.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                <span className="flex-1">
                  <span className="font-medium">SQL:</span> MySQL, MongoDB.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                <span className="flex-1">
                  <span className="font-medium">Components:</span> Shadcn/ui,
                  Radix UI, HeadlessUI, MUI, Antd, Mantine.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                <span className="flex-1">
                  <span className="font-medium">CI/CD:</span> GitHub Actions,
                  Gitlab CI/CD.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                <span className="flex-1">
                  <span className="font-medium">Server:</span> Linux (Nginx,
                  Apache), Docker, AWS.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                <span className="flex-1">
                  <span className="font-medium">Best packages:</span> Zod, React
                  Hook Form, Framer Motion, Prisma, Drizzle ORM, Next Auth,
                  SWR...
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                <span className="flex-1">
                  <span className="font-medium">NextJS:</span> App Route, Server
                  Component, Suspense, API, Dynamic Route, Cache, Meta Data,
                  PPR, Next-Auth, Next Safe Action....
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="experience" className="max-w-3xl w-full mx-auto mt-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Experience</h2>
          <Experience />
        </div>
      </section>
      <section id="education" className="max-w-3xl w-full mx-auto mt-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Education</h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <p className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin className="size-4" />
                  Hanoi, Vietnam
                </p>
                <p className="text-gray-500 text-sm">2013 - 2017</p>
              </div>
              <h3 className="text-md font-medium">
                National Economics University
              </h3>
              <p className="text-gray-500">
                Computer Science and Information Technology
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="max-w-3xl w-full mx-auto mt-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Projects</h2>
        </div>
      </section>
      <section id="contact" className="max-w-3xl w-full mx-auto mt-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Contact</h2>
          <Contact />
        </div>
      </section>
      <footer className="max-w-3xl w-full mx-auto mt-16">
        <Footer />
      </footer>
      <ScrollSection />
    </main>
  );
}

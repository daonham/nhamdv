import Image from 'next/image';
import { Download, MapPin } from 'lucide-react';
import Link from 'next/link';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import ToggleTheme from '@/components/toggle-theme';

export default function Home() {
  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center overflow-hidden">
      <header className="relative mx-auto w-full max-w-screen-md px-4">
        <div className="flex h-full w-full flex-col justify-center gap-8">
          <div className="flex w-full gap-4 pt-16">
            <div className="relative h-[120px] w-[120px]">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={120}
                height={120}
                className="absolute top-0 left-0 h-full w-full rounded-md object-cover shadow-md"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 sm:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <h1 className="text-2xl font-medium">Đào Văn Nhâm</h1>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
                  Software Engineer
                </p>
                <p className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <MapPin className="size-4" />
                  <span className="text-sm">Hanoi, Vietnam</span>
                </p>
                <p className="flex items-center gap-2 text-gray-500 dark:text-gray-300">
                  <span className="size-2 rounded-full bg-green-500" />
                  <span className="text-sm">Available for work</span>
                </p>
              </div>
              <div className="flex flex-col justify-end gap-2 sm:items-end">
                <div className="inline-flex gap-2 sm:items-end">
                  <button
                    type="button"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white dark:bg-gray-200 dark:text-black"
                  >
                    <Download className="size-4" />
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row dark:border-gray-600">
            <a
              href="mailto:daonham95@gmail.com"
              className="group relative min-w-50 rounded-xl bg-gray-200/50 px-4 py-3 text-sm ring-1 ring-gray-200 hover:ring-gray-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-gray-600"
            >
              <div className="font-medium text-gray-500 dark:text-gray-400">Available</div>
              <div className="font-medium text-gray-800 dark:text-white">Send a message</div>
              <div className="absolute top-4 right-4 flex gap-0.5">
                <div className="size-1 rounded-full bg-gray-400/60 group-hover:bg-gray-500 dark:bg-gray-400 dark:group-hover:bg-gray-200"></div>
                <div className="size-1 rounded-full bg-gray-400/60 group-hover:bg-gray-500 dark:bg-gray-400 dark:group-hover:bg-gray-200"></div>
              </div>
            </a>
            <Link
              href="/projects"
              className="group relative min-w-50 rounded-xl bg-gray-200/50 px-4 py-3 text-sm ring-1 ring-gray-200 hover:ring-gray-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-gray-600"
            >
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Supply</div>
              <div className="text-sm font-medium text-gray-800 dark:text-white">
                Discover my projects
              </div>
              <div className="absolute top-4 right-4 flex gap-0.5">
                <div className="size-1 rounded-full bg-gray-400/60 group-hover:bg-gray-500 dark:bg-gray-400 dark:group-hover:bg-gray-200"></div>
                <div className="size-1 rounded-full bg-gray-400/60 group-hover:bg-gray-500 dark:bg-gray-400 dark:group-hover:bg-gray-200"></div>
              </div>
            </Link>
            <Link
              href="/contact"
              className="group relative min-w-50 rounded-xl bg-gray-200/50 px-4 py-3 text-sm ring-1 ring-gray-200 hover:ring-gray-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-gray-600"
            >
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Contact</div>
              <div className="text-sm font-medium text-gray-800 dark:text-white">Get in touch</div>
              <div className="absolute top-4 right-4 flex gap-0.5">
                <div className="size-1 rounded-full bg-gray-400/60 group-hover:bg-gray-500 dark:bg-gray-400 dark:group-hover:bg-gray-200"></div>
                <div className="size-1 rounded-full bg-gray-400/60 group-hover:bg-gray-500 dark:bg-gray-400 dark:group-hover:bg-gray-200"></div>
              </div>
            </Link>
          </div>
        </div>

        <ToggleTheme />
      </header>
      <section id="about" className="mx-auto mt-16 w-full max-w-screen-md px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">About me</h2>
          <div className="flex flex-col gap-2">
            <article className="prose max-w-none dark:text-gray-300">
              <p>
                I am a Developer with 8 years of experience in web and mobile development,
                specializing in both frontend and backend technologies. Throughout my career, I have
                contributed to a wide range of projects, from startups to enterprise-level
                applications, building scalable, high-performance solutions that enhance user
                experience.
              </p>
              <p>
                With a strong foundation in JavaScript/TypeScript, I am proficient in modern
                technologies such as React, Next.js, and Remix on the frontend, as well as NestJS,
                Express.js, and Node.js on the backend. Additionally, I have experience working with
                React Native to develop cross-platform mobile applications. I always strive to apply
                best practices and optimal software architectures to ensure a clean, maintainable,
                and scalable codebase.
              </p>
              <p>
                Beyond technical expertise, I value teamwork, effective communication, and
                continuous learning. I am passionate about solving complex problems, improving
                system performance, and enhancing user experience through innovative technology
                solutions.
              </p>
              <p>
                I am eager to work in a dynamic environment where I can contribute my skills to
                building high-quality products while continuously growing as a developer.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="skills" className="mx-auto mt-16 w-full max-w-screen-md px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Skills</h2>
          <div className="flex flex-col gap-2">
            <ul className="flex flex-col gap-2 text-base text-gray-700 dark:text-gray-300">
              <li className="flex gap-2.5">
                <span className="mt-2 size-1.25 rounded-full bg-gray-600" />
                <span className="flex-1">
                  <span className="font-medium">Frontend:</span> ReactJS, NextJS, Remix, NestJS,
                  ExpressJS, React Native, Expo, Redux, Redux Toolkit, Vite...
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1.25 rounded-full bg-gray-600" />
                <span className="flex-1">
                  <span className="font-medium">CSS:</span> TailwindCSS, CSS Modules.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1.25 rounded-full bg-gray-600" />
                <span className="flex-1">
                  <span className="font-medium">Backend:</span> NodeJS, NestJS, ExpressJS, Golang.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1.25 rounded-full bg-gray-600" />
                <span className="flex-1">
                  <span className="font-medium">SQL:</span> MySQL, MongoDB.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1.25 rounded-full bg-gray-600" />
                <span className="flex-1">
                  <span className="font-medium">Components:</span> Shadcn/ui, Radix UI, HeadlessUI,
                  MUI, Antd, Mantine.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1.25 rounded-full bg-gray-600" />
                <span className="flex-1">
                  <span className="font-medium">CI/CD:</span> GitHub Actions, Gitlab CI/CD.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1.25 rounded-full bg-gray-600" />
                <span className="flex-1">
                  <span className="font-medium">Server:</span> Linux (Nginx, Apache), Docker, AWS.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1.25 rounded-full bg-gray-600" />
                <span className="flex-1">
                  <span className="font-medium">Best packages:</span> Zod, React Hook Form, Framer
                  Motion, Prisma, Drizzle ORM, Next Auth, SWR...
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1.25 rounded-full bg-gray-600" />
                <span className="flex-1">
                  <span className="font-medium">NextJS:</span> App Route, Server Component,
                  Suspense, API, Dynamic Route, Cache, Meta Data, PPR, Next-Auth, Next Safe
                  Action....
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="experience" className="mx-auto mt-16 w-full max-w-screen-md px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Experience</h2>
          <Experience />
        </div>
      </section>
      <section id="education" className="mx-auto mt-16 w-full max-w-screen-md px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Education</h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="size-4" />
                  Hanoi, Vietnam
                </p>
                <p className="text-sm text-gray-500">2013 - 2017</p>
              </div>
              <h3 className="text-md font-medium">National Economics University</h3>
              <p className="text-gray-500 dark:text-gray-300">
                Computer Science and Information Technology
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="mx-auto mt-16 w-full max-w-screen-md px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Projects</h2>
          <Projects />
        </div>
      </section>
      <section id="contact" className="mx-auto mt-16 w-full max-w-screen-md px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Contact</h2>
          <Contact />
        </div>
      </section>
      <footer className="mx-auto mt-16 w-full max-w-screen-md px-4">
        <Footer />
      </footer>
    </main>
  );
}

import Image from "next/image";
import { Download, Mail, MapPin, Linkedin, Dot } from "lucide-react";
import Link from "next/link";
import Contact from "@/components/contact";

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
      <section className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col gap-4 mt-16">
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
      <section className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col gap-4 mt-16">
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
      <section className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col gap-4 mt-16">
          <h2 className="text-xl font-medium">Experience</h2>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <h3 className="text-md font-medium">ThimPress</h3>
                <span className="text-gray-500">2020 - Present</span>
              </div>
              <p className="text-gray-500 text-sm">Full Stack Developer</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Managing outsourcing projects, overseeing project timelines,
                    deliverables, and client communication.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Leading technical teams, providing guidance and support to
                    ensure successful implementation of technical solutions.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Acting as the primary technical support resource, resolving
                    complex issues and ensuring project quality standards are
                    met.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Serving as the lead developer for high-complexity projects,
                    responsible for designing, coding, and implementing critical
                    features.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Ensuring code quality and optimizing system performance to
                    meet project requirements and technical specifications.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Implementing CI/CD configurations to streamline development
                    and deployment processes.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Overseeing deployment for clients, ensuring smooth releases
                    and minimizing downtime.
                  </span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-800">
                  Responsibilities:
                </span>{" "}
                Managing outsourcing projects, leading technical teams,
                providing technical support, developing critical features,
                ensuring code quality, optimizing system performance,
                implementing CI/CD configurations, overseeing deployment
                processes.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-800">Technologies:</span>{" "}
                ReactJS, Golang, NextJS, Remix, NestJS, ExpressJS, React Native,
                Expo, Redux, Redux Toolkit, Vite, TailwindCSS, MySQL, MongoDB,
                Docker, AWS, GitHub Actions, Gitlab CI/CD, Prisma, Drizzle ORM,
                Next-Auth, Framer Motion, Tanstack Query, SWR...
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-800">Tools:</span>{" "}
                VSCode, Figma, Notion, Jira, Asana, Slack, Discord, Postman...
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <h3 className="text-md font-medium">
                  Freelance and Self-Employed
                </h3>
                <span className="text-gray-500">2018 - 2020</span>
              </div>
              <p className="text-gray-500 text-sm">Full Stack Developer</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Independently created and developed WordPress products
                    (themes, plugins) and listed them on the Envato marketplace.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Managed product updates, customer support, and ensured
                    high-quality standards to meet marketplace requirements.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Engaged in freelance projects on platforms such as Upwork,
                    collaborating with clients to deliver custom solutions.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Managed project timelines, communication, and ensured the
                    delivery of high-quality results.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Actively learned new technologies and programming languages
                    on the latest platforms to stay current with industry
                    trends.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Expanded skill set to participate in a broader range of
                    freelance projects and offer innovative solutions to
                    clients.
                  </span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-800">
                  Responsibilities:
                </span>{" "}
                Independently creating and developing WordPress products,
                managing product updates, customer support, and ensuring
                high-quality standards to meet marketplace requirements.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-800">Technologies:</span>{" "}
                ReactJS, NextJS, ExpressJS, React Native, PHP, MySQL, MongoDB,
                WordPress, WooCommerce, Elementor, Beaver Builder, WPBakery...
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-800">Tools:</span>{" "}
                VSCode, Adobe XD, Figma, Notion...
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <h3 className="text-md font-medium">FTC Company</h3>
                <span className="text-gray-500">2017 - 2018</span>
              </div>
              <p className="text-gray-500 text-sm">Full Stack Developer</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Managed and led the development of WordPress projects sold
                    on the Envato marketplace.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Took responsibility for coding and maintaining high-quality
                    WordPress themes and plugins to meet market standards and
                    customer expectations.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Developed and maintained WordPress themes and plugins to
                    enhance product functionality and improve user experience.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="size-1.25 rounded-full bg-gray-600 mt-2" />
                  <span className="flex-1">
                    Ensured seamless integration with existing systems,
                    optimizing code for performance, security, and scalability.
                  </span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-800">
                  Responsibilities:
                </span>{" "}
                Managed and led the development of WordPress projects, coding
                and maintaining high-quality themes and plugins, ensuring
                seamless integration with existing systems, and optimizing for
                performance and security.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-800">Technologies:</span>{" "}
                PHP, MySQL, WordPress, WooCommerce, Elementor, Beaver Builder,
                WPBakery...
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-800">Tools:</span>{" "}
                Sublime Text, Photoshop, Skype, Slack, Trello...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col gap-4 mt-16">
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
      <section className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col gap-4 mt-16">
          <h2 className="text-xl font-medium">Projects</h2>
        </div>
      </section>
      <section className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col gap-4 mt-16">
          <h2 className="text-xl font-medium">Contact</h2>
          <Contact />
        </div>
      </section>
      <footer className="max-w-3xl w-full mx-auto mt-16">
        <div className="h-16 flex justify-center items-center border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Đào Văn Nhâm. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

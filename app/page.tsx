import Career from "@/components/sections/career"
import Hero from "@/components/sections/hero"
import RowSection from "@/components/sections/row-section"

export default function Home() {
  return (
    <>
      <Hero
        data={{
          title: (
            <>
              A <span className="text-primary">full-stack</span> developer
              specializes in JavaScript.
            </>
          ),
          footNote: "With a Decade of professional experience.",
        }}
      />

      <RowSection
        data={{
          title: "What I can offer",
          items: [
            {
              title: "WebApp Development",
              description:
                "Applications developed with best in class technologies and practices.",
              stack: [
                "TypeScript",
                "React.js",
                "Next.js",
                "Node.js",
                "TanStack",
                "GraphQL",
                "MongoDB",
                "MySQL",
                "TailwindCSS",
                "AWS",
                "Vercel",
              ],
            },
            {
              title: "Website Development",
              description:
                "Websites developed with SEO and Accessibility in mind using modern technologies.",
              stack: ["Next.js", "Strapi.js", "Payload CMS", "WordPress"],
            },
            {
              title: "Design Systems",
              description:
                "Scalable, Re-usable, and Distributable Components and Styleguides for your Application.",
              stack: [
                "React.js",
                "Storybook.js",
                "Radix-UI",
                "React-ARIA",
                "Figma",
                "TailwindCSS",
              ],
            },
            {
              title: "UI / UX Design",
              description:
                "World class user interfaces and user experiences for your application.",
              stack: ["Figma", "Adobe Photoshop"],
            },
          ],
        }}
      />

      <RowSection
        data={{
          title: "Personal Work",
          items: [
            {
              title: "GitWhois",
              description:
                "Extract a detailed overview from any public github repository.",
              action: {
                title: "GitWhois.com",
                url: "https://gitwhois.com",
              },
            },
            {
              title: "WhatTheHex",
              description:
                "A simple web application to get a name for any given Hex color code.",
              action: {
                title: "WhatTheHex.app",
                url: "https://WhatTheHex.app",
              },
            },
          ],
        }}
      />

      <RowSection
        data={{
          title: "Recent Work",
          footNote: `Feel free to email me at peiris@kasun.io to get full list of work I’ve done over the period of a decade.`,
          items: [
            {
              title: "John Morris Group",
              url: "https://johnmorris.kp.lk",
              description:
                "Design, planning and UI development of the John Morris Group website.",
              action: {
                title: "(Case study coming soon)",
              },
            },
            {
              title: "LabFriend",
              url: "https://labfriend.com.au",
              description:
                "Ideation, design, and front-end development of the LabFriend Australia website.",
              action: {
                title: "(Case study coming soon)",
              },
            },
            {
              title: "Tesla Owners UK",
              url: "https://teslaowners.org.uk",
              description:
                "Design and full development cycle of the Tesla Owners UK website.",
              action: {
                title: "(Case study coming soon)",
              },
            },
            {
              title: "NZ Safety Blackwoods",
              url: "https://nzsafetyblackwoods.co.nz",
              description:
                "Frontend architecture, Scalable design-system development, and Frontend team management for multiple product suites.",
              action: {
                title: "(Case study coming soon)",
              },
            },
          ],
        }}
      />

      <Career
        data={{
          title: "Career History",
          items: [
            {
              title: "Full Stack Generalist",
              year: "2020 ~",
              action: {
                title: "Karapincha Studio",
                url: "https://karapincha.studio",
              },
              badge: {
                children: "Freelance",
              },
            },
            {
              title: "Senior Tech Lead (Frontend)",
              year: "2017",
              action: {
                title: "Amplifyn",
                url: "https://amplifyn.com",
              },
            },
            {
              title: "Senior Software Engineer",
              year: "2016",
              action: {
                title: "Amplifyn",
                url: "https://amplifyn.com",
              },
            },
            {
              title: "Senior UI Engineer",
              year: "2015",
              action: {
                title: "AccelAero",
                url: "https://accelaero.com/",
              },
            },
            {
              title: "Frontend engineer",
              year: "2014",
              action: {
                title: "ESOFT Metro Campus",
                url: "https://esoft.lk/",
              },
            },
            {
              title: "Trainee Designer and Developer",
              year: "2013",
              action: {
                title: "Web Choice Online Pty Ltd",
                url: "https://webco.au/",
              },
            },
          ],
        }}
      />
    </>
  )
}

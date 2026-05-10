import React from "react";
import { ArrowRight, Mail, Wrench, Brain, Globe2, Leaf, Users } from "lucide-react";import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Transportation Efficiency Analysis",
    description:
      "Analyzed transportation systems through an engineering lens, focusing on efficiency, constraints, and practical improvements.",
    tags: ["Mechanical Engineering", "Systems", "Analysis"],
  },
  {
    title: "Public-Interest Technology Experiments",
    description:
      "Exploring small, concrete projects at the intersection of AI, institutional accountability, and social impact.",
    tags: ["AI", "Governance", "Impact"],
  },
  {
    title: "Climate & Energy Learning Portfolio",
    description:
      "Building technical understanding of energy systems, decarbonization tradeoffs, and infrastructure constraints.",
    tags: ["Energy", "Climate", "Engineering"],
  },
];

const interests = [
  {
    icon: Brain,
    title: "AI & Accountability",
    text: "How AI systems can be designed, evaluated, and governed in the public interest.",
  },
  {
    icon: Users,
    title: "Fair Institutions",
    text: "Reducing avoidable harm caused by bad incentives, exploitation, and weak accountability.",
  },
  {
    icon: Leaf,
    title: "Climate & Energy",
    text: "Practical engineering paths toward cleaner, more resilient systems.",
  },
  {
    icon: Wrench,
    title: "Building Useful Things",
    text: "Turning broad values into concrete prototypes, tools, and experiments.",
  },
];

export default function PersonalWebsite() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 md:py-16">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">Nick</div>
          <div className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#projects" className="hover:text-slate-950">Projects</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </div>
        </nav>

        <header className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
              Mechanical engineering student · Builder · Impact-focused learner
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
                Building technical skills for a fairer, more resilient world.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                I’m a mechanical engineering student interested in AI, public-interest technology, institutional decision-making, climate and energy, and practical tools that reduce avoidable suffering.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl px-6 py-6 text-base">
                View projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl px-6 py-6 text-base">
                Contact me
              </Button>
            </div>
          </div>

          <Card className="rounded-3xl border-slate-200 bg-white shadow-sm">
            <CardContent className="space-y-5 p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100">
                <Globe2 className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-semibold">Current focus</h2>
              <p className="leading-7 text-slate-600">
                Testing career directions through small projects in AI governance, worker-centered technology, supply-chain accountability, and food-systems change.
              </p>
            </CardContent>
          </Card>
        </header>

        <section id="about" className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              I like building, explaining, coding, and working on problems where technical decisions shape people’s lives. I’m especially interested in systems where incentives, institutions, and technology interact.
            </p>
            <p>
              Right now I’m looking for practical ways to combine engineering judgment, software skills, and public-interest work into projects with real-world value.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Interests</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {interests.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                  <CardContent className="space-y-4 p-5">
                    <Icon className="h-6 w-6" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              Replace these with your strongest work, class projects, prototypes, writing, or experiments.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="leading-7 text-slate-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-3xl bg-slate-950 p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Let’s connect.</h2>
              <p className="max-w-xl leading-7 text-slate-300">
                I’m interested in internships, entry-level roles, projects, and conversations around engineering, AI, institutions, and public-interest technology.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a href="mailto:nickthumphrey@icloud.com">
                <Button variant="secondary" className="rounded-2xl px-5 py-6">
                  Email
                </Button>
              </a>
              <Button variant="secondary" className="rounded-2xl px-5 py-6">
                LinkedIn
              </Button>
              <a href="https://github.com/nickthumphrey-cell" target="_blank">
                <Button variant="secondary" className="rounded-2xl px-5 py-6">
                  GitHub
                </Button>
              </a>
              <a href="/resume.pdf" target="_blank">
                <Button className="rounded-2xl px-6 py-6 text-base">
                  View resume
                </Button>
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Nick",
    };
  }

  return {
    title: `${project.title} | Nick`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-10 md:py-16">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Nick
          </Link>
          <Link
            href="/#projects"
            className={buttonVariants({
              variant: "outline",
              className: "h-auto rounded-2xl px-4 py-3",
            })}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Projects
          </Link>
        </nav>

        <header className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                {tag}
              </span>
            ))}
          </div>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{project.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">{project.summary}</p>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1fr_18rem]">
          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {project.details.map((detail) => (
                <Card key={detail.label} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                  <CardContent className="space-y-2 p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{detail.label}</p>
                    <p className="text-sm leading-6 text-slate-700">{detail.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-5">
              {project.sections.map((section) => (
                <Card key={section.heading} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                  <CardContent className="space-y-3 p-6">
                    <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
                    <p className="leading-8 text-slate-600">{section.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <Card className="rounded-3xl border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-4 p-5">
                <h2 className="text-lg font-semibold">Project links</h2>
                {project.links.length > 0 ? (
                  <div className="space-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-200"
                      >
                        {link.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-6 text-slate-600">
                    Add a GitHub repo, live demo, paper, or slide deck link in the project data when you have one.
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-3 p-5">
                <h2 className="text-lg font-semibold">Template note</h2>
                <p className="text-sm leading-6 text-slate-600">
                  Fill in the summary, details, sections, and links for this project from one shared data file.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </main>
  );
}

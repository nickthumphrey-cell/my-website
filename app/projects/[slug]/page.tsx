import type { Metadata } from "next";
import Image from "next/image";
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
                  <p className="text-sm leading-6 text-slate-600">No public links are available for this project yet.</p>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-3 p-5">
                <h2 className="text-lg font-semibold">Portfolio</h2>
                <p className="text-sm leading-6 text-slate-600">
                  More engineering, machine-learning, and education projects are featured on the home page.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>

        {project.images.length > 0 && (
          <section aria-labelledby="project-gallery-heading" className="space-y-5">
            <h2 id="project-gallery-heading" className="text-2xl font-semibold tracking-tight">
              Project gallery
            </h2>
            <div className="grid items-start gap-5 sm:grid-cols-2">
              {project.images.map((image, index) => (
                <figure key={image.src} className={index === 0 || image.videoSrc ? "sm:col-span-2" : undefined}>
                  {image.videoSrc ? (
                    <video
                      controls
                      playsInline
                      preload="none"
                      poster={image.src}
                      width={image.width}
                      height={image.height}
                      aria-label={image.alt}
                      className="h-auto max-h-[36rem] w-full rounded-3xl bg-white object-contain ring-1 ring-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
                    >
                      <source src={image.videoSrc} type="video/mp4" />
                      <a href={image.videoSrc}>Watch the project demonstration</a>
                    </video>
                  ) : (
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View full-size image: ${image.alt} (opens in a new tab)`}
                      className="block overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes={index === 0 ? "(max-width: 1024px) calc(100vw - 48px), 976px" : "(max-width: 639px) calc(100vw - 48px), (max-width: 1024px) calc(50vw - 34px), 478px"}
                        className="h-auto max-h-[36rem] w-full object-contain"
                      />
                    </a>
                  )}
                  {image.caption && (
                    <figcaption className="px-1 pt-3 text-sm leading-6 text-slate-600">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

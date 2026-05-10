export type ProjectSection = {
  heading: string;
  body: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  tags: string[];
  details: {
    label: string;
    value: string;
  }[];
  sections: ProjectSection[];
  links: ProjectLink[];
};

// Edit this file to fill in each project page without changing the page layout.
export const projects: Project[] = [
  {
    slug: "transportation-efficiency-analysis",
    title: "Transportation Efficiency Analysis",
    description:
      "Analyzed transportation systems through an engineering lens, focusing on efficiency, constraints, and practical improvements.",
    summary:
      "Use this space for the short version of the project: what question you investigated, why it mattered, and what you found.",
    tags: ["Mechanical Engineering", "Systems", "Analysis"],
    details: [
      { label: "Role", value: "Project lead / analyst" },
      { label: "Timeline", value: "Add date or semester" },
      { label: "Tools", value: "Add tools, models, or methods" },
    ],
    sections: [
      {
        heading: "Problem",
        body: "Describe the transportation system, constraint, or efficiency question you focused on.",
      },
      {
        heading: "Approach",
        body: "Explain the data, assumptions, calculations, interviews, models, or engineering reasoning you used.",
      },
      {
        heading: "Outcome",
        body: "Summarize the most important result, recommendation, design insight, or tradeoff.",
      },
      {
        heading: "What I learned",
        body: "Add the skills, concepts, or judgment you developed while working on this project.",
      },
    ],
    links: [],
  },
  {
    slug: "public-interest-technology-experiments",
    title: "Public-Interest Technology Experiments",
    description:
      "Exploring small, concrete projects at the intersection of AI, institutional accountability, and social impact.",
    summary:
      "Use this space for the short version of the work: what you tried, who it was meant to help, and what changed after testing it.",
    tags: ["AI", "Governance", "Impact"],
    details: [
      { label: "Role", value: "Builder / researcher" },
      { label: "Timeline", value: "Add date or semester" },
      { label: "Tools", value: "Add tools, datasets, or frameworks" },
    ],
    sections: [
      {
        heading: "Motivation",
        body: "Describe the public-interest problem, decision process, or accountability gap behind the experiment.",
      },
      {
        heading: "Prototype",
        body: "Explain what you built or tested, including the smallest useful version of the idea.",
      },
      {
        heading: "Evaluation",
        body: "Add how you judged whether the experiment was useful, fair, reliable, or worth continuing.",
      },
      {
        heading: "Next steps",
        body: "List the improvements, research questions, or collaborations that would move the project forward.",
      },
    ],
    links: [],
  },
  {
    slug: "climate-energy-learning-portfolio",
    title: "Climate & Energy Learning Portfolio",
    description:
      "Building technical understanding of energy systems, decarbonization tradeoffs, and infrastructure constraints.",
    summary:
      "Use this space for the short version of the portfolio: what topics you studied, what artifacts you produced, and how it shaped your thinking.",
    tags: ["Energy", "Climate", "Engineering"],
    details: [
      { label: "Role", value: "Independent learner / writer" },
      { label: "Timeline", value: "Add date or semester" },
      { label: "Topics", value: "Add systems, technologies, or readings" },
    ],
    sections: [
      {
        heading: "Focus area",
        body: "Describe the specific energy system, climate problem, or infrastructure question you explored.",
      },
      {
        heading: "Work products",
        body: "Add notes, essays, calculations, diagrams, presentations, or other artifacts from the portfolio.",
      },
      {
        heading: "Key tradeoffs",
        body: "Summarize the engineering, economic, political, or operational tradeoffs you learned to reason about.",
      },
      {
        heading: "Future direction",
        body: "Explain what you want to study, build, or test next based on this work.",
      },
    ],
    links: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

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
    slug: "applied-autonomous-driving-machine-learning-class",
    title: "Applied Autonomous Driving Machine Learning Class",
    description:
      "Trained machine learning models to control an autonomous vehicle, employing multiple strategies.",
    summary:
      "Use this space for the short version of the project: what question you investigated, why it mattered, and what you found.",
    tags: ["Software Development", "Machine Learning"],
    details: [
      { label: "Role", value: "Student" },
      { label: "Timeline", value: "Spring 2026" },
      { label: "Tools", value: "TensorFlow, Roboflow, Foxglove, Colab" },
    ],
    sections: [
      {
        heading: "Goal",
        body: "In Machine Learning for Autonomous Vehicles, the goal was to create algorithms/models that could autonomously control a RC car around a race track.",
      },
      {
        heading: "Approach",
        body: "Approaches we explored included hard coded control using canny edge detection, mixed control using machine learning algorithms to semantically detect lane lines and signs with hard coded control based upon sensor inputs, and end to end machine learning control where the algorithm is fed sensor inputs and outputs steering angle.",
      },
      {
        heading: "What I learned",
        body: "I learned how to clean, label, balance, and augment data for training of a vision-based machine learning model. Additionally, I learned how to train convolutional neural network models for semantic segmentation and end-to-end models using TensorFlow. I also learned the basics of ROS2, Linux, and Docker.",
      },
    ],
    links: ["https://vayrolab.com/"],
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

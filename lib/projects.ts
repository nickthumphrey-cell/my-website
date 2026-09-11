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

export const projects: Project[] = [
  {
    slug: "machine-learning-autonomous-vehicles",
    title: "Machine Learning for Autonomous Vehicles",
    description: "Developed and tested computer-vision and end-to-end learning approaches for an autonomous RC car.",
    summary: "In Cal Poly's Applied Autonomous Driving course, I built and evaluated several approaches for steering an RC car around a racetrack, from classical vision and PID control to learned perception and end-to-end neural networks.",
    tags: ["Machine Learning", "Autonomous Systems", "Computer Vision"],
    details: [
      { label: "Role", value: "Student developer" },
      { label: "Timeline", value: "Spring 2026" },
      { label: "Tools", value: "Python, TensorFlow, Roboflow, ROS 2, Docker" },
    ],
    sections: [
      {
        heading: "Goal",
        body: "The goal was to create algorithms that could autonomously control an RC car around a racetrack. I tested the work in simulation, in Google Colab, and on the physical car that provided the training data.",
      },
      {
        heading: "Control strategies",
        body: "I explored hard-coded control with Canny edge detection; a hybrid approach that used learned lane and sign detection with PID steering and speed control; and end-to-end learning, where sensor input directly produced a steering command. This made the tradeoffs between explicit rules, learned perception, and fully learned control tangible.",
      },
      {
        heading: "Model development",
        body: "I cleaned, labeled, balanced, and augmented vision data in Roboflow. For perception, I trained YOLO detection and U-Net semantic-segmentation models, including filtering corrupt samples by reviewing edge cases in lane-pixel counts. For end-to-end control, I balanced steering commands, horizontally flipped images, and trained a PilotNet-style convolutional network with dropout to predict steering angle.",
      },
      {
        heading: "What I learned",
        body: "The project strengthened my understanding of data quality, train-validation-test splits, overfitting, augmentation, GPU training, and performance metrics. I also gained practical experience with TensorFlow, Linux, ROS 2, Docker, Foxglove, and the workflow of moving an algorithm from a notebook toward a robotic system.",
      },
    ],
    links: [],
  },
  {
    slug: "pufferfish-rov-instruction",
    title: "Pufferfish ROV Instruction",
    description: "Taught fifth-grade students how to design, build, test, and iterate on remotely operated underwater vehicles.",
    summary: "I guided two groups of four fifth-grade students through the basics of ROV engineering, translating unfamiliar electrical and mechanical concepts into hands-on design challenges and helping teams carry their vehicles from frame design to pool testing.",
    tags: ["STEM Education", "ROV Design", "Mentoring"],
    details: [
      { label: "Role", value: "ROV instructor and small-group mentor" },
      { label: "Audience", value: "Fifth-grade students" },
      { label: "Format", value: "Class lessons, team builds, and pool testing" },
    ],
    sections: [
      {
        heading: "Instruction and mentorship",
        body: "My primary responsibility was teaching two groups of four students the fundamentals of building a remotely operated underwater vehicle. I also planned and delivered whole-class lessons, including a neutral-buoyancy activity, and kept the material visual and question-driven to make complex topics approachable.",
      },
      {
        heading: "Build process",
        body: "Students designed and assembled their frames, mounted motors, organized wiring, and checked that the vehicle could move forward, backward, turn, rise, and descend. They then tested the control board and power supply by verifying the indicator LEDs for each directional input.",
      },
      {
        heading: "Teaching approach",
        body: "I learned that students benefit from a clear task, room to struggle productively, and supportive but high expectations. When teams worked through electrical diagrams with minimal intervention, they gained more ownership; when one student dominated, I asked them to teach teammates and share the hands-on connections.",
      },
      {
        heading: "Testing and reflection",
        body: "The project concluded with pool testing at Atascadero High School. The ROVs were driven through the course, giving students a concrete test of their work. I reflected on how clearer team roles, structured feedback, and more time for iteration could make future build-and-test sessions more engaging and effective.",
      },
    ],
    links: [],
  },
  {
    slug: "senior-design-stakblocks",
    title: "Senior Design",
    description: "Led electrical-controls and preheating work for a sustainable agricultural-fiber preparation system.",
    summary: "As part of an eight-person Cal Poly senior design team, I helped develop StakBlocks: a research-scale system intended to prepare agricultural fibers with controlled size, temperature, and moisture for sustainable building-material experiments.",
    tags: ["Mechanical Engineering", "Sustainable Materials", "Controls"],
    details: [
      { label: "Role", value: "Electrical-controls and preheating subteam lead" },
      { label: "Team", value: "Eight-person Cal Poly senior design team" },
      { label: "Tools", value: "Arduino, C++, PID control, thermal analysis, fabrication" },
    ],
    sections: [
      {
        heading: "Project context",
        body: "The team set out to support research into sustainable construction materials made from agricultural by-products. Our system was intended to give researchers controllable fiber size, temperature, and moisture before compression, helping them study how processing conditions affect material properties without relying on external binders.",
      },
      {
        heading: "My contribution",
        body: "I led the electrical-controls and preheating subteams. I designed and assembled portions of the control system, selected and integrated appropriately rated hardware, and contributed heat-transfer analysis to estimate heater specifications and heating times. I also worked on sheet-metal ducting, insulation, electrical enclosures, and system assembly.",
      },
      {
        heading: "Controls prototype",
        body: "Using Arduino and C++, I built a PID temperature controller that read a MAX6675 thermocouple, displayed setpoint and real-time temperature, and switched a relay to control heat. In preliminary testing, the display reported the expected temperature and the output switched correctly, validating the basic control workflow.",
      },
      {
        heading: "Lessons from the project",
        body: "The full mechanism was not completed because of safety concerns, but the project was a valuable lesson in engineering judgment. I came away with stronger skills in high-voltage wiring safety, crimping, fuse protection, grounding, relays, hardware selection, controls, and manufacturing - along with a clearer understanding of how early role definition, task management, design review, and deliberate delegation shape complex team projects.",
      },
    ],
    links: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

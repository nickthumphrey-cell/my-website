This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To clone website locally: git clone https://github.com/nickthumphrey-cell/my-website
for a specific branch: git clone -b <branch-name> https://github.com/nickthumphrey-cell/my-website

to install required packages, run inside the project folder: npm install

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project pictures

Each project page supports a photo gallery at the bottom, after its project details. The first photo
spans the gallery width, and additional photos appear in two columns on larger
screens and one column on phones. Photos keep their proportions and can be opened
at full size by selecting them. Projects without photos hide the gallery.
The driving demonstrations use MP4 videos with playback controls and static poster
images, so they do not autoplay or download the video until playback starts.

After transferring photos from your phone:

1. Save web-compatible copies (JPEG, PNG, or WebP) under
   `public/images/projects/<project-slug>/`. Export HEIC photos as JPEG first.
2. In `lib/projects.ts`, find the matching project and add entries to its `images`
   array in the order you want them displayed:

   ```ts
   images: [
     {
       src: "/images/projects/senior-design-stakblocks/controls.jpg",
       alt: "Describe what is visible in this photo",
       width: 1600,
       height: 1200,
       caption: "Optional context about this stage of the project.",
     },
   ],
   ```

   Replace the example filename and dimensions with your photo's actual values.
   Write a descriptive `alt` for accessibility; `caption` is optional.
   For a silent demonstration video, set `src` to its poster image and add
   `videoSrc` with the MP4 path. Videos span the gallery width.

The project slugs are `machine-learning-autonomous-vehicles`,
`pufferfish-rov-instruction`, and `senior-design-stakblocks`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

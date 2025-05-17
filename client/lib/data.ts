export type Blog={
    title: string,
    content: string,
    tags: string[],
    author: string,
    createdAt: string,
    updatedAt: string,
    id: string,
    status: "PUBLISHED" | "DRAFT"
}
export const blogs: Blog[] = [
  {
    id: "1",
    title: "Understanding React Server Components",
    content: `
React Server Components (RSC) are a powerful new feature introduced by the React team to allow components to render on the server without sending the component code to the client. This significantly reduces the amount of JavaScript that needs to be sent over the wire, improving performance and user experience.

The key idea is to separate your application into server and client components. Server components can fetch data and perform secure operations, while client components handle interactivity.

To get started with RSC in Next.js, enable the experimental server component feature and begin marking components with 'use client' or not depending on their use. In this article, we’ll build a real-world example of a blog platform using RSC and see how it simplifies data fetching and optimizes performance.`,
    tags: ["React", "Server Components", "Frontend"],
    author: "Jane Doe",
    createdAt: "2025-05-01T10:00:00Z",
    updatedAt: "2025-05-05T12:30:00Z",
    status: "PUBLISHED",
  },
  {
    id: "2",
    title: "Mastering TypeScript with Real-World Projects",
    content: `
TypeScript is a strongly typed superset of JavaScript that offers better tooling, safer refactoring, and improved developer experience. In this post, we'll walk through real-world projects such as a task manager app, a blog CMS, and a REST API client, and explore how TypeScript improves code quality.

You'll learn how to define complex types, use generics effectively, and configure tsconfig for scalable applications. We’ll also cover how to integrate TypeScript with frameworks like React and Next.js. By the end, you’ll be confident in applying TypeScript in production.`,
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    author: "John Smith",
    createdAt: "2025-04-21T08:15:00Z",
    updatedAt: "2025-04-22T09:00:00Z",
    status: "PUBLISHED",
  },
  {
    id: "3",
    title: "Building a Blog Platform with Next.js and Shadcn UI",
    content: `
Creating a modern, responsive blog platform has never been easier with tools like Next.js, Tailwind CSS, and Shadcn UI. In this guide, we'll build a fully functional blog application from scratch using app directory routing, API routes, and server-side rendering.

We'll implement features like markdown editing, tag management, dark mode toggle, and a custom admin dashboard. Using Shadcn UI gives us beautifully styled and accessible components that fit well with Tailwind. By the end of the series, you'll have a complete project to showcase in your portfolio.`,
    tags: ["Next.js", "Shadcn", "TailwindCSS"],
    author: "Alice Chen",
    createdAt: "2025-05-10T14:20:00Z",
    updatedAt: "2025-05-11T10:00:00Z",
    status: "DRAFT",
  },
  {
    id: "4",
    title: "Why You Should Learn Zustand in 2025",
    content: `
Zustand is a minimalistic state management library for React applications. It's fast, flexible, and has a simple API, making it a favorite choice for modern React developers. Unlike Redux, Zustand doesn’t require boilerplate setup or reducers.

This post explains Zustand’s core concepts such as creating stores, updating state, and subscribing to changes. We'll compare it with other state libraries like Redux Toolkit, Recoil, and Jotai, and explore how it scales in large apps. We’ll also implement a real-world example—a todo app with filters and persistence.`,
    tags: ["Zustand", "React", "State Management"],
    author: "Carlos Vega",
    createdAt: "2025-03-18T11:40:00Z",
    updatedAt: "2025-03-19T16:25:00Z",
    status: "PUBLISHED",
  },
];
export const myblogs: Blog[] = [
  {
    id: "1",
    title: "Understanding React Server Components",
    content: `
React Server Components (RSC) are a powerful new feature introduced by the React team to allow components to render on the server without sending the component code to the client. This significantly reduces the amount of JavaScript that needs to be sent over the wire, improving performance and user experience.

The key idea is to separate your application into server and client components. Server components can fetch data and perform secure operations, while client components handle interactivity.

To get started with RSC in Next.js, enable the experimental server component feature and begin marking components with 'use client' or not depending on their use. In this article, we’ll build a real-world example of a blog platform using RSC and see how it simplifies data fetching and optimizes performance.`,
    tags: ["React", "Server Components", "Frontend"],
    author: "Jane Doe",
    createdAt: "2025-05-01T10:00:00Z",
    updatedAt: "2025-05-05T12:30:00Z",
    status: "PUBLISHED",
  },
  {
    id: "2",
    title: "Mastering TypeScript with Real-World Projects",
    content: `
TypeScript is a strongly typed superset of JavaScript that offers better tooling, safer refactoring, and improved developer experience. In this post, we'll walk through real-world projects such as a task manager app, a blog CMS, and a REST API client, and explore how TypeScript improves code quality.

You'll learn how to define complex types, use generics effectively, and configure tsconfig for scalable applications. We’ll also cover how to integrate TypeScript with frameworks like React and Next.js. By the end, you’ll be confident in applying TypeScript in production.`,
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    author: "Jane Doe",
    createdAt: "2025-04-21T08:15:00Z",
    updatedAt: "2025-04-22T09:00:00Z",
    status: "PUBLISHED",
  },
  {
    id: "3",
    title: "Building a Blog Platform with Next.js and Shadcn UI",
    content: `
Creating a modern, responsive blog platform has never been easier with tools like Next.js, Tailwind CSS, and Shadcn UI. In this guide, we'll build a fully functional blog application from scratch using app directory routing, API routes, and server-side rendering.

We'll implement features like markdown editing, tag management, dark mode toggle, and a custom admin dashboard. Using Shadcn UI gives us beautifully styled and accessible components that fit well with Tailwind. By the end of the series, you'll have a complete project to showcase in your portfolio.`,
    tags: ["Next.js", "Shadcn", "TailwindCSS"],
    author: "Jane Doe",
    createdAt: "2025-05-10T14:20:00Z",
    updatedAt: "2025-05-11T10:00:00Z",
    status: "DRAFT",
  },
  {
    id: "4",
    title: "Why You Should Learn Zustand in 2025",
    content: `
Zustand is a minimalistic state management library for React applications. It's fast, flexible, and has a simple API, making it a favorite choice for modern React developers. Unlike Redux, Zustand doesn’t require boilerplate setup or reducers.

This post explains Zustand’s core concepts such as creating stores, updating state, and subscribing to changes. We'll compare it with other state libraries like Redux Toolkit, Recoil, and Jotai, and explore how it scales in large apps. We’ll also implement a real-world example—a todo app with filters and persistence.`,
    tags: ["Zustand", "React", "State Management"],
    author: "Jane Doe",
    createdAt: "2025-03-18T11:40:00Z",
    updatedAt: "2025-03-19T16:25:00Z",
    status: "PUBLISHED",
  },
];

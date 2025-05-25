# navshiksha

**navshiksha** is a modern, full-stack educational platform built with Next.js (App Router), React, and TypeScript. The repository is organized for a multi-role environment (admin, teacher, student) and features a modular, scalable architecture.

## Key Features & Structure

### Monorepo Structure
- `app/` contains all Next.js routes, including nested layouts for admin, teacher, and student dashboards.
- Each major user role (`admin`, `teacher`, `student`) has its own subfolder with dedicated pages and layouts.

### AI Integration
- `/api/openai/` provides endpoints for prompt evaluation and streaming AI responses, leveraging OpenAI's GPT models.
- The student "personal tutor" feature streams markdown-formatted AI responses and evaluates prompt quality.

### Teacher Content Tools
- Teachers can create, draft, publish, and send content to a vector database for semantic search.
- The "Send to Vector DB" tab includes animated progress for each processing stage.

### Component Library
- `components/ui/` contains a comprehensive set of reusable UI components (buttons, cards, dialogs, tabs, etc.), styled with Tailwind CSS.
- Custom components for avatars, branding, and sidebar navigation.

### Hooks & Utilities
- Custom React hooks for OpenAI integration and toast notifications.
- Utility functions for class name merging and other helpers.

### Modern Next.js Practices
- Uses App Router with nested layouts and server components.
- Route-based code splitting for efficient loading.
- Environment variables and API keys are handled securely on the server.

### Other
- Includes loading skeletons, error handling, and responsive design.
- Project is ready for deployment (includes `vercel.json`).

## Summary

This repository is a robust, extensible foundation for an AI-powered educational platform, with clear separation of concerns, modern UI/UX, and deep integration of generative AI for both students and teachers.

## Project tree (Excerpt)
- package.json
- app
  - admin
    - content
      - loading.tsx
      - page.tsx
    - courses
      - loading.tsx
      - page.tsx
    - dashboard
      - page.tsx
    - layout.tsx
    - maintenance
      - archiving
        - loading.tsx
        - page.tsx
      - cache
        - page.tsx
      - database
        - page.tsx
      - logs
        - loading.tsx
        - page.tsx
      - page.tsx
    - reports
      - loading.tsx
      - page.tsx
    - settings
      - page.tsx
    - users
      - loading.tsx
      - page.tsx
  - api
    - openai
      - prompt-evaluation
        - route.ts
      - stream
        - route.ts
  - globals.css
  - layout.tsx
  - login
    - login-tabs.tsx
    - page.tsx
  - not-found.tsx
  - page.tsx
  - student
    - dashboard
      - page.tsx
    - feedback
      - page.tsx
    - layout.tsx
    - my-courses
      - page.tsx
    - my-progress
      - page.tsx
    - personal-tutor
      - page.tsx
    - prompt-refiner
    - upcoming-classes
      - page.tsx
  - teacher
    - create-content
      - create-new
        - page.tsx
      - drafts
        - page.tsx
      - layout.tsx
      - page.tsx
      - published
        - page.tsx
      - send-to-vector-db
        - page.tsx
    - create-courses
      - page.tsx
    - dashboard
      - page.tsx
    - feedback
      - loading.tsx
      - page.tsx
    - layout.tsx
    - my-pupils
      - loading.tsx
      - page.tsx
- components
  - avatars
    - admin-avatar.tsx
    - default-avatar.tsx
    - student-avatar.tsx
    - teacher-avatar.tsx
  - brand-logo.tsx
  - custom-sidebar-trigger.tsx
  - footer.tsx
  - header.tsx
  - prompt-refinement-dialog.tsx
  - student
    - personal-tutor.tsx
  - theme-provider.tsx
  - ui
    - accordion.tsx
    - alert-dialog.tsx
    - alert.tsx
    - aspect-ratio.tsx
    - avatar.tsx
    - badge.tsx
    - breadcrumb.tsx
    - button.tsx
    - calendar.tsx
    - card.tsx
    - carousel.tsx
    - chart.tsx
    - checkbox.tsx
    - collapsible.tsx
    - command.tsx
    - context-menu.tsx
    - dialog.tsx
    - drawer.tsx
    - dropdown-menu.tsx
    - form.tsx
    - hover-card.tsx
    - input-otp.tsx
    - input.tsx
    - label.tsx
    - menubar.tsx
    - navigation-menu.tsx
    - pagination.tsx
    - popover.tsx
    - progress.tsx
    - radio-group.tsx
    - resizable.tsx
    - scroll-area.tsx
    - select.tsx
    - separator.tsx
    - sheet.tsx
    - sidebar.tsx
    - skeleton.tsx
    - slider.tsx
    - sonner.tsx
    - switch.tsx
    - table.tsx
    - tabs.tsx
    - textarea.tsx
    - toast.tsx
    - toaster.tsx
    - toggle-group.tsx
    - toggle.tsx
    - tooltip.tsx
    - use-mobile.tsx
    - use-toast.ts
- components.json
- hooks
  - use-mobile.tsx
  - use-openai.ts
  - use-toast.ts
- lib
  - utils.ts
- next-env.d.ts
- next.config.mjs
- outtree
- package-lock.json
- package.json
- pnpm-lock.yaml
- postcss.config.mjs
- public
  - All SVGs go here
- README.md
- styles
  - globals.css
- tailwind.config.ts
- tsconfig.json
- vercel.json

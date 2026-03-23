import { AcademicShell } from "@/components/site/academic-shell";

export default function GuidePage() {
  return (
    <AcademicShell activePath="/markdown" pageTitle="Guide">
      <p>
        This site is implemented in Next.js with Tailwind CSS and shadcn components, but it is
        intentionally structured to resemble the AcademicPages template.
      </p>
      <h2>How to update content</h2>
      <ul>
        <li>Edit profile and navigation in <code>src/lib/site-data.ts</code>.</li>
        <li>Edit route content in <code>src/app/*/page.tsx</code>.</li>
        <li>Adjust theme/layout in <code>src/app/globals.css</code>.</li>
      </ul>
    </AcademicShell>
  );
}

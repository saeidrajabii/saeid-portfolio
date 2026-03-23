import Link from "next/link";
import { AcademicShell } from "@/components/site/academic-shell";
import { projects } from "@/lib/site-data";

export default function PortfolioPage() {
  return (
    <AcademicShell activePath="/portfolio" pageTitle="Portfolio">
      <p>Selected technical projects and research artifacts.</p>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <strong>{project.name}</strong>
            <br />
            {project.description}
            {project.url ? (
              <>
                <br />
                <Link href={project.url} target="_blank" rel="noreferrer">
                  Project link
                </Link>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </AcademicShell>
  );
}

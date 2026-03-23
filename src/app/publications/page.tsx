import Link from "next/link";
import { AcademicShell } from "@/components/site/academic-shell";
import { publications } from "@/lib/site-data";

export default function PublicationsPage() {
  return (
    <AcademicShell activePath="/publications" pageTitle="Publications">
      <p>Selected research papers and preprints.</p>
      <ul>
        {publications.map((paper) => (
          <li key={paper.title}>
            <Link href={paper.url} target="_blank" rel="noreferrer">
              <strong>{paper.title}</strong>
            </Link>
            <br />
            {paper.authors}
            <br />
            <em>{paper.venue}</em>, {paper.year}
          </li>
        ))}
      </ul>
    </AcademicShell>
  );
}

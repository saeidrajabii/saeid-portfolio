import Link from "next/link";
import { AcademicShell } from "@/components/site/academic-shell";
import { talks } from "@/lib/site-data";

export default function TalksPage() {
  return (
    <AcademicShell activePath="/talks" pageTitle="Talks">
      <p>Invited talks, seminars, and selected presentations.</p>
      <ul>
        {talks.map((talk) => (
          <li key={talk.title + talk.date}>
            <strong>{talk.title}</strong>
            <br />
            {talk.event} - {talk.location} - {talk.date}
            {talk.url ? (
              <>
                <br />
                <Link href={talk.url} target="_blank" rel="noreferrer">
                  Related link
                </Link>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </AcademicShell>
  );
}

import Link from "next/link";
import { AcademicShell } from "@/components/site/academic-shell";
import { profile, publications, teaching } from "@/lib/site-data";

export default function CvPage() {
  return (
    <AcademicShell activePath="/cv" pageTitle="Curriculum Vitae">
      <p>
        Downloadable CV can be added at <code>/public/files/cv.pdf</code> and linked here.
      </p>
      <p>
        Contact: <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
      </p>

      <h2>Education</h2>
      <ul>
        <li>
          <strong>Ph.D. in Computer Engineering</strong>, University of Delaware (ongoing)
        </li>
      </ul>

      <h2>Publications</h2>
      <ul>
        {publications.map((item) => (
          <li key={item.title}>
            {item.authors}, <strong>{item.title}</strong>, {item.venue}, {item.year}
          </li>
        ))}
      </ul>

      <h2>Teaching</h2>
      <ul>
        {teaching.map((item) => (
          <li key={item.course + item.term}>
            {item.course} - {item.role} ({item.term})
          </li>
        ))}
      </ul>
    </AcademicShell>
  );
}

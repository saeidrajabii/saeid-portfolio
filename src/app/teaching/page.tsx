import { AcademicShell } from "@/components/site/academic-shell";
import { teaching } from "@/lib/site-data";

export default function TeachingPage() {
  return (
    <AcademicShell activePath="/teaching" pageTitle="Teaching">
      <p>Teaching assistantships and instructional contributions.</p>
      <ul>
        {teaching.map((item) => (
          <li key={item.course + item.term}>
            <strong>{item.course}</strong>
            <br />
            {item.role} ({item.term})
            <br />
            {item.notes}
          </li>
        ))}
      </ul>
    </AcademicShell>
  );
}

import { AcademicShell } from "@/components/site/academic-shell";
import { homeSections } from "@/lib/site-data";

export default function HomePage() {
  return (
    <AcademicShell activePath="/" pageTitle={homeSections.introTitle}>
      {homeSections.intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2>Research Interests</h2>
      <ul>
        {homeSections.interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>

      <h2>Contact</h2>
      <p>
        I am open to collaboration and research inquiries. Please feel free to reach out by
        email or LinkedIn.
      </p>
    </AcademicShell>
  );
}

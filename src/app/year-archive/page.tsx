import { AcademicShell } from "@/components/site/academic-shell";
import { posts } from "@/lib/site-data";

export default function ArchivePage() {
  return (
    <AcademicShell activePath="/year-archive" pageTitle="Blog Posts">
      <p>Short technical notes and research reflections.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.title + post.date}>
            <strong>{post.title}</strong>
            <br />
            {post.date}
            <br />
            {post.summary}
          </li>
        ))}
      </ul>
    </AcademicShell>
  );
}

import Image from "next/image";
import Link from "next/link";
import { siteTitle, navItems, profile } from "@/lib/site-data";

type AcademicShellProps = {
  activePath: string;
  pageTitle: string;
  children: React.ReactNode;
};

export function AcademicShell({ activePath, pageTitle, children }: AcademicShellProps) {
  return (
    <div className="academic-root">
      <header className="masthead">
        <div className="masthead-inner">
          <nav className="masthead-nav" aria-label="Main navigation">
            <Link href="/" className={`masthead-title ${activePath === "/" ? "active" : ""}`}>
              {siteTitle}
            </Link>
            <ul className="masthead-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={activePath === item.href ? "active" : ""}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="academic-main" role="main">
        <aside className="sidebar">
          <div className="profile-card">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={160}
              height={160}
              className="profile-image"
              priority
            />
            <h2>{profile.name}</h2>
            <p>{profile.shortBio}</p>
            <ul className="profile-links">
              <li>{profile.location}</li>
              <li>{profile.institution}</li>
              <li>
                <a href={`mailto:${profile.email}`}>Email</a>
              </li>
              <li>
                <a href={profile.scholar} target="_blank" rel="noreferrer">
                  Google Scholar
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <article className="article-content">
          <h1>{pageTitle}</h1>
          {children}
        </article>
      </main>
    </div>
  );
}

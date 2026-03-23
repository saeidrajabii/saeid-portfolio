import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  activities,
  news,
  profile,
  publications,
  researchInterests,
} from "@/lib/portfolio-data";

const quickFacts = [
  { label: "Role", value: profile.headline },
  { label: "Institution", value: profile.institution },
  { label: "Research Tracks", value: String(researchInterests.length) },
  { label: "Recent Publications", value: String(publications.length) },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-background pb-14 text-foreground">
      <div className="hero-noise" />
      <div className="hero-beam" />

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/75 backdrop-blur-lg">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <span className="font-heading text-sm tracking-[0.18em] text-foreground/80 uppercase">
            SR Portfolio
          </span>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="menu-link">
              About
            </a>
            <a href="#research" className="menu-link">
              Research
            </a>
            <a href="#publications" className="menu-link">
              Publications
            </a>
            <a href="#contact" className="menu-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pt-10 sm:px-8 md:pt-14">
        <section id="about" className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Card className="panel card-rise border-0">
            <CardHeader className="gap-5">
              <div className="flex items-start gap-4">
                <Avatar className="h-14 w-14 ring-2 ring-primary/25">
                  <AvatarImage
                    src="https://scholar.google.com/citations/images/avatar_scholar_128.png"
                    alt={profile.name}
                  />
                  <AvatarFallback>SR</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-heading text-3xl leading-tight sm:text-4xl">
                    {profile.name}
                  </CardTitle>
                  <CardDescription className="mt-1 text-base text-muted-foreground">
                    {profile.headline}
                  </CardDescription>
                </div>
              </div>
              <p className="max-w-2xl text-[1.02rem] leading-7 text-foreground/92">
                {profile.summary}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {researchInterests.map((topic) => (
                  <Badge key={topic} variant="secondary" className="chip">
                    {topic}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={profile.cta.linkedin}
                  target="_blank"
                  className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  LinkedIn
                </Link>
                <Link
                  href={profile.cta.scholar}
                  target="_blank"
                  className="inline-flex h-9 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium transition hover:bg-muted"
                >
                  Google Scholar
                </Link>
              </div>
            </CardHeader>
          </Card>

          <Card className="panel card-rise delay-1 border-0">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Profile Snapshot</CardTitle>
              <CardDescription>
                Built from public profile data (Scholar + indexed university records).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="space-y-1">
                  <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {fact.label}
                  </p>
                  <p className="text-sm font-medium leading-6 text-foreground/95">
                    {fact.value}
                  </p>
                  <Separator className="last:hidden" />
                </div>
              ))}
              <div className="pt-2 text-sm text-muted-foreground">
                <p>Advisor: {profile.advisor}</p>
                <p>Email: {profile.email}</p>
                <p>{profile.location}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="research">
          <Tabs defaultValue="interests" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:max-w-md">
              <TabsTrigger value="interests">Interests</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>
            <TabsContent value="interests" className="mt-4">
              <Card className="panel border-0">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Research Interests</CardTitle>
                  <CardDescription>
                    Focused areas aligned with secure and trustworthy hardware systems.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {researchInterests.map((interest) => (
                    <div key={interest} className="interest-item">
                      {interest}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="news" className="mt-4">
              <Card className="panel border-0">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">News</CardTitle>
                  <CardDescription>
                    Recent milestones and publication highlights.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {news.map((item) => (
                    <div key={item.date + item.text} className="timeline-item">
                      <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                        {item.date}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-foreground/90">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activities" className="mt-4">
              <Card className="panel border-0">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Professional Activities</CardTitle>
                  <CardDescription>
                    Ongoing contributions beyond published work.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {activities.map((activity) => (
                    <div key={activity} className="interest-item">
                      {activity}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section id="publications" className="space-y-4">
          <h2 className="font-heading text-3xl">Selected Publications</h2>
          <div className="grid gap-4">
            {publications.map((publication) => (
              <Card key={publication.title} className="panel card-rise border-0">
                <CardHeader className="gap-2">
                  <CardTitle className="text-xl leading-snug">
                    <Link
                      href={publication.link}
                      target="_blank"
                      className="underline-offset-4 transition hover:text-primary hover:underline"
                    >
                      {publication.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {publication.authors}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-2 text-sm">
                  <Badge variant="outline">{publication.venue}</Badge>
                  <Badge variant="secondary">{publication.year}</Badge>
                  {publication.note ? (
                    <Badge variant="secondary" className="chip">
                      {publication.note}
                    </Badge>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="pt-4">
          <Card className="panel border-0">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Contact</CardTitle>
              <CardDescription>
                Open to research collaborations and technical discussions in hardware security.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Link
                href={`mailto:${profile.email}`}
                className="inline-flex h-8 items-center justify-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                {profile.email}
              </Link>
              <Link
                href={profile.cta.linkedin}
                target="_blank"
                className="inline-flex h-8 items-center justify-center rounded-lg border border-border bg-background px-2.5 text-sm font-medium transition hover:bg-muted"
              >
                Connect on LinkedIn
              </Link>
              <Link
                href={profile.cta.scholar}
                target="_blank"
                className="inline-flex h-8 items-center justify-center rounded-lg border border-border bg-background px-2.5 text-sm font-medium transition hover:bg-muted"
              >
                Scholar Profile
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

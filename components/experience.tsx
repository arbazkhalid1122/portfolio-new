export function Experience() {
    return (
      <section id="experience" className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-primary">Experience</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border p-6 bg-card">
              <h3 className="text-xl font-bold text-primary">React/NextJS Developer</h3>
              <p className="text-sm text-muted-foreground">Enigmatix Pvt | Nov 2021 - Present</p>
              <ul className="mt-4 list-disc pl-5 text-sm space-y-2">
                <li>Develop robust, scalable web applications using React.js and Next.js</li>
                <li>Manage server state efficiently with React Query</li>
                <li>Expertise in state management using Redux, MobX and MobX State Tree</li>
                <li>Collaborate with backend teams for smooth API integration</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-card">
              <h3 className="text-xl font-bold text-primary">Frontend Developer Intern</h3>
              <p className="text-sm text-muted-foreground">Enigmatix Pvt | May 2021 - Oct 2021</p>
              <ul className="mt-4 list-disc pl-5 text-sm space-y-2">
                <li>Enhanced and refined user interfaces using React.js</li>
                <li>Improved web application performance and accessibility</li>
                <li>Utilized Redux and Context API for state management</li>
                <li>Collaborated using Git for version control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  
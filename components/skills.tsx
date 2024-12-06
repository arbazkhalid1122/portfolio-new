export function Skills() {
    const skills = [
      "React", "Next.js", "TypeScript", "Redux", "React Query", "MobX", "Tailwind CSS", "Git",
      "Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "Jest", "Cypress", "AWS"
    ]
  
    return (
      <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-primary">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  
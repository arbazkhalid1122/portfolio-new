import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function Projects() {
  const projects = [
    {
      title: 'Oono',
      description: 'A revolutionary social platform with Instagram-like features and embeddable widgets.',
      image: '/placeholder.svg?height=200&width=300',
      tech: 'NextJS, AMP, Socket.io',
    },
    {
      title: 'Al-Hilal',
      description: 'Team management website for swimming and football clubs.',
      image: '/placeholder.svg?height=200&width=300',
      tech: 'ReactJS, Shadcn, Redux, Google Auth',
    },
    {
      title: 'COGPLAY',
      description: 'School management platform with quizzes and secure payments.',
      image: '/placeholder.svg?height=200&width=300',
      tech: 'ReactJS, Ant Design, Redux, Stripe',
    },
    {
      title: 'Rent Arround',
      description: 'Responsive item rental web app with authentication and server-side rendering.',
      image: '/placeholder.svg?height=200&width=300',
      tech: 'NextJS, React Query, Firebase, Tailwind',
    },
  ]

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-primary">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card">
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription>{project.tech}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="mt-4 text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button>View Project</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


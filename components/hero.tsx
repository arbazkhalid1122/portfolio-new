import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/20 to-secondary/20">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Arbaz - React/NextJs Developer
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Crafting robust, scalable web applications with cutting-edge technologies.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#contact" passHref>
              <Button size="lg">Hire Me</Button>
            </Link>
            <Link href="#projects" passHref>
              <Button variant="outline" size="lg">View Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


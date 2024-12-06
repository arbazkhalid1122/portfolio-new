export function Footer() {
    return (
      <footer className="w-full py-6 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p>&copy; 2023 Arbaz. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary">
                LinkedIn
              </a>
              <a href="#" className="hover:text-secondary">
                GitHub
              </a>
              <a href="#" className="hover:text-secondary">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  
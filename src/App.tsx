import { Badge } from "./components/ui/badge";
import { Card } from "./components/ui/card";
import { ContactForm } from "./components/ui/contactform";

function App() {
  function getCopyrightYear() {
    return new Date().getFullYear();
  }
  return (
    <div className="min-h-screen bg-muted">
      <header className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Revolutionizing Healthcare{" "}
              <span className="text-primary">Infrastructure</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Automating the backbone of healthcare with code. Scalable,
              efficient, unstoppable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4"></div>
          </div>
        </div>
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-3/4">
          <div></div>
        </div>
      </header>
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, powerful, and efficient
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform is designed to be simple to use, yet powerful enough
              to handle complex infrastructure needs.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Define</h3>
              <p className="text-muted-foreground">
                Define your infrastructure using our simple, declarative syntax.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Plan</h3>
              <p className="text-muted-foreground">
                Preview changes before they're applied to your infrastructure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply</h3>
              <p className="text-muted-foreground">
                Apply changes to your infrastructure with a single command.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Monitor</h3>
              <p className="text-muted-foreground">
                Monitor your infrastructure in real-time with our dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">
             Valinor
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Rare Opportunity to Transform Healthcare Tech
            </h2>
            <p className="text-lg text-muted-foreground">Join the movement </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
            © {getCopyrightYear()} Valinor Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

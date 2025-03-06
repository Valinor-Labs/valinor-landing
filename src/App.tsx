import { Badge } from "./components/ui/badge";
import { Card } from "./components/ui/card";
import { ContactForm } from "./components/ui/contactform";

function App() {
  function getCopyrightYear() {
    return new Date().getFullYear();
  }
  return (
    <div className="min-h-screen bg-primary-bone">
      <header className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl text-black font-bold tracking-tight mb-6">
              Revolutionizing Healthcare{" "}
              <span className="text-black">Infrastructure</span>
            </h1>
            <p className="text-xl text-black mb-2">
              Automating the backbone of healthcare with code.
            </p>
            <span className="text-xl text-black">
              Scalable, efficient, unstoppable.
            </span>
            <div className="flex flex-col sm:flex-row gap-4"></div>
          </div>
        </div>
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-3/4">
          <div></div>
        </div>
      </header>
      <section className="py-20 bg-primary-bone">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary-forest hover:bg-primary-beige hover:text-black">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Simple, powerful, and efficient
            </h2>
            <p className="text-lg text-black">
              Our platform is designed to be simple to use, yet powerful enough
              to handle complex infrastructure needs.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-bone">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Define</h3>
              <p className="text-black">
                Define your infrastructure using our simple, declarative syntax.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-bone">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Plan</h3>
              <p className="text-black">
                Preview changes before they're applied to your infrastructure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-bone">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Apply</h3>
              <p className="text-black">
                Apply changes to your infrastructure with a single command.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-bone">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Monitor</h3>
              <p className="text-black">
                Monitor your infrastructure in real-time with our dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="border border-primary-beige"></div>
      <section className="py-20 bg-primary-teal">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary-forest hover:bg-primary-beige hover:text-black">
              Valinor
            </Badge>
            <h2 className="text-3xl md:text-4xl text-primary-bone font-bold mb-4">
              Building Infrastructure as Code for Healthcare
            </h2>
          </div>
          <h3 className="text-2xl text-center mb-12 text-primary-bone">Join the movement </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 bg-primary-teal border-primary-bone">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
      <footer className="bg-primary-teal py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-primary-bone">
            © {getCopyrightYear()} Valinor Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

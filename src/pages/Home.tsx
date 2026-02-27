import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Scale, FileText, BookOpen, ChevronRight, Heart, HandHelping } from "lucide-react";
import { Link } from "react-router-dom";
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fighting for Your Right to Dignity in the Digital Age
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              We're advocating for a legally binding EU right to dignity, ensuring
              nonconsensual deepfakes are swiftly removed and platforms are held accountable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/about">Learn More <ArrowRight className="ml-2" size={20} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                <Link to="/contact" className="text-primary">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Get Help Now - primary CTA */}
          <Link to="/toolkit" className="block mb-4">
            <Card className="p-6 md:p-8 bg-primary text-primary-foreground hover:bg-primary/95 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                  <ArrowRight className="text-primary-foreground" size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold">Get help now</h2>
                  <p className="opacity-90 text-sm md:text-base">Step-by-step guidance for responding to non-consensual content</p>
                </div>
                <ChevronRight className="opacity-70 group-hover:translate-x-1 transition-transform hidden sm:block" size={24} />
              </div>
            </Card>
          </Link>

          {/* Protect Yourself */}
          <Link to="/toolkit" className="block mb-8">
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all group border-2 border-border hover:border-primary/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-foreground">Protect yourself</h2>
                  <p className="text-muted-foreground text-sm">Proactive steps to protect your privacy and reduce risk</p>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all hidden sm:block" size={20} />
              </div>
            </Card>
          </Link>

          {/* Three info cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link to="/toolkit">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <h3 className="font-bold text-foreground mb-1">Resources</h3>
                <p className="text-sm text-muted-foreground mb-3">Organisations, helplines, and tools across Europe</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">Browse <ArrowRight size={14} /></span>
              </Card>
            </Link>
            <Link to="/toolkit">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Scale className="text-primary" size={20} />
                </div>
                <h3 className="font-bold text-foreground mb-1">Legal context</h3>
                <p className="text-sm text-muted-foreground mb-3">Understanding your rights in plain language</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">Learn more <ArrowRight size={14} /></span>
              </Card>
            </Link>
            <Link to="/about">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Users className="text-primary" size={20} />
                </div>
                <h3 className="font-bold text-foreground mb-1">About us</h3>
                <p className="text-sm text-muted-foreground mb-3">Who we are and why this toolkit exists</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1">Read more <ArrowRight size={14} /></span>
              </Card>
            </Link>
          </div>

          {/* Disclaimers */}
          






















        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our Mission
            </h2>
            <div className="bg-card p-8 md:p-12 rounded-lg">
              <p className="text-lg md:text-xl text-card-foreground leading-relaxed">
                The Right to Dignity Alliance is committed to establishing comprehensive
                legal protections against nonconsensual deepfakes and synthetic media.
                We believe that everyone deserves to control their digital identity and
                that platforms must be held accountable for harmful content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-foreground">
            Our Key Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Legal Advocacy</h3>
              <p className="text-muted-foreground">Working with EU policymakers to establish a legally binding right to dignity that protects individuals from nonconsensual deepfakes.</p>
            </Card>

            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Platform Accountability</h3>
              <p className="text-muted-foreground">
                Ensuring tech platforms have robust systems to rapidly detect and
                remove nonconsensual deepfakes and synthetic media.
              </p>
            </Card>

            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Scale className="text-accent-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Victim Support</h3>
              <p className="text-muted-foreground">
                Providing resources and advocacy for victims of nonconsensual
                deepfakes, ensuring they have access to justice and support.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in This Critical Fight
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Together, we can build a digital future that respects human dignity
            and protects individuals from harm.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link to="/contact">Contact Us <ArrowRight className="ml-2" size={20} /></Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default Home;
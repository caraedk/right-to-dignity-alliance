import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
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
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our Mission
            </h2>
            <div className="bg-secondary p-8 md:p-12 rounded-lg">
              <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed">
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
              <p className="text-muted-foreground">
                Working with EU lawmakers to establish a legally binding right to
                dignity that protects individuals from nonconsensual deepfakes.
              </p>
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
    </div>
  );
};

export default Home;

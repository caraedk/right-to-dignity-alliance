import { Card } from "@/components/ui/card";
import { Users, Building2 } from "lucide-react";

const teamMembers = [
  {
    name: "Cecilia Liu",
    role: "Team Lead"
  },
  {
    name: "Zinab Zinad",
    role: "Policy Research Lead"
  },
  {
    name: "Cara Doumbe Kingue",
    role: "Partnerships & Outreach Lead"
  },
  {
    name: "Ninive Aguilar",
    role: "Communications Lead"
  },
  {
    name: "Tina Wong",
    role: "Operations Lead"
  }
];

const partners = [
  {
    name: "European Digital Rights Initiative",
    type: "Advocacy Organization"
  },
  {
    name: "Tech Accountability Network",
    type: "Platform Watchdog"
  },
  {
    name: "Women's Digital Safety Coalition",
    type: "Victim Support"
  },
  {
    name: "Centre for AI Ethics",
    type: "Research Institution"
  },
  {
    name: "EU Privacy Rights Foundation",
    type: "Legal Advocacy"
  },
  {
    name: "Digital Identity Protection League",
    type: "Civil Society Organization"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Meet the dedicated team and partners working to establish comprehensive
            legal protections for digital dignity across the European Union.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-secondary">
                <h2 className="text-2xl font-bold mb-4 text-secondary-foreground">Our Vision</h2>
                <p className="text-secondary-foreground/90 leading-relaxed">
                  A digital Europe where every individual's right to dignity is protected
                  by law, where nonconsensual deepfakes are swiftly addressed, and where
                  platforms are held to the highest standards of accountability.
                </p>
              </Card>
              <Card className="p-8 bg-accent">
                <h2 className="text-2xl font-bold mb-4 text-accent-foreground">Our Approach</h2>
                <p className="text-accent-foreground/90 leading-relaxed">
                  We combine legal expertise, policy advocacy, research, and grassroots
                  organizing to create lasting change. We work with victims, policymakers,
                  and technology platforms to build comprehensive solutions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Users className="text-primary" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Team</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 bg-card">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-medium">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Building2 className="text-primary" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Partners</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              We're proud to work alongside leading organizations across Europe who share
              our commitment to protecting digital dignity and holding platforms accountable.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-2">{partner.name}</h3>
                  <p className="text-sm text-accent font-medium">{partner.type}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-secondary-foreground">
            Want to Partner With Us?
          </h2>
          <p className="text-lg mb-6 text-secondary-foreground/90 max-w-2xl mx-auto">
            We're always looking to expand our network of partners committed to
            protecting digital dignity. Get in touch to explore collaboration opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

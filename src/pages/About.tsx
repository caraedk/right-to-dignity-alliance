import { Card } from "@/components/ui/card";
import { Users, Building2, HandHelping, Heart, UserPlus } from "lucide-react";

const teamMembers = [
  { name: "Cecilia Liu", role: "Team Lead" },
  { name: "Zinab Zinad", role: "Policy Research Lead" },
  { name: "Cara Doumbe Kingue", role: "Partnerships & Outreach Lead" },
  { name: "Ninive Aguilar", role: "Communications Lead" },
  { name: "Tina Wong", role: "Operations Lead" },
];

const partners = [
  { name: "Alpbach IDEAS", type: "Think Tank & Policy Forum" },
  { name: "Club Alpbach France", type: "Policy Network" },
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
            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.type}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground text-center">
              Get Involved
            </h2>
            <p className="text-lg text-secondary-foreground/90 text-center max-w-3xl mx-auto mb-12">
              There are many ways to support our mission. Whether you're an individual, organization, or platform interested in protecting digital dignity, we want to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-card text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-muted-foreground text-sm">
                  Join our team of dedicated volunteers working on advocacy and outreach.
                </p>
              </Card>

              <Card className="p-8 bg-card text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <HandHelping className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Partner</h3>
                <p className="text-muted-foreground text-sm">
                  Explore partnership opportunities to amplify our collective impact.
                </p>
              </Card>

              <Card className="p-8 bg-card text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Support</h3>
                <p className="text-muted-foreground text-sm">
                  Help fund our advocacy work and support victims of deepfake abuse.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <a
                href="mailto:righttodignityalliance@gmail.com"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Contact Us via Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

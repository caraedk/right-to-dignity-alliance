import { Card } from "@/components/ui/card";
import { FileText, Target, Lightbulb, Scale, Users, Shield } from "lucide-react";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Manifesto</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Our key ideas and policy research for protecting digital dignity across Europe.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="text-primary" size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Digital Dignity as a Right</h3>
              <p className="text-muted-foreground text-sm">
                Every person has an inherent right to control how their likeness is used in the digital world. Nonconsensual deepfakes are a violation of this fundamental right.
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Scale className="text-primary" size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Accountability Over Self-Regulation</h3>
              <p className="text-muted-foreground text-sm">
                Voluntary platform guidelines are insufficient. We need legally binding obligations that hold platforms accountable for hosting and distributing nonconsensual content.
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Users className="text-primary" size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Victim-Centered Approach</h3>
              <p className="text-muted-foreground text-sm">
                Legal frameworks and support systems must prioritize the needs and experiences of victims. No one should bear the burden of proving their own exploitation.
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Lightbulb className="text-primary" size={20} />
              </div>
              <h3 className="font-bold text-lg mb-2">Prevention Through Education</h3>
              <p className="text-muted-foreground text-sm">
                Awareness and digital literacy are critical. We advocate for comprehensive education on consent, digital ethics, and the risks of synthetic media.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy Research */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Policy Research & Recommendations</h2>

          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Rapid Content Removal</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Platforms should be required to remove reported nonconsensual intimate content within 24 hours. Current response times are inconsistent and often too slow to prevent lasting harm.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  Mandatory 24-hour takedown window for reported nonconsensual intimate content
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  Automated detection systems to proactively identify and flag synthetic media
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  Hash-based sharing across platforms to prevent re-uploading
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Harmonised EU Legislation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Current legal protections vary widely across EU member states. We advocate for a unified EU directive that establishes minimum standards for criminalising nonconsensual deepfakes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  Explicit inclusion of AI-generated and manipulated content in intimate image abuse laws
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  Cross-border enforcement mechanisms for perpetrators operating across jurisdictions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  Minimum sentencing guidelines that reflect the severity of harm
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Platform Transparency</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Tech platforms must be transparent about how they handle reports of nonconsensual content, including response times, removal rates, and appeal outcomes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  Mandatory public reporting on content moderation for intimate image abuse
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  Independent auditing of AI detection and removal systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  Clear, accessible reporting mechanisms in all EU languages
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-secondary-foreground">
            Support Our Vision
          </h2>
          <p className="text-lg mb-6 text-secondary-foreground/90 max-w-2xl mx-auto">
            Join us in advocating for stronger protections. Together, we can make digital dignity a reality for everyone in Europe.
          </p>
          <a
            href="mailto:righttodignityalliance@gmail.com"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Get in Touch via Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default Manifesto;

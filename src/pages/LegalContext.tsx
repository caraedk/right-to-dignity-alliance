import { Card } from "@/components/ui/card";
import { Scale, AlertTriangle, Shield, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LegalContext = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Legal context
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Understanding your rights in plain language. This is not legal
            advice — we explain the landscape so you can make informed
            decisions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Disclaimer */}
        <Card className="p-6 mb-10 border-l-4 border-l-accent bg-accent/5">
          <h2 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="text-accent" size={20} />
            Disclaimer
          </h2>
          <p className="text-sm text-muted-foreground">
            This information is for educational purposes only. Laws vary by
            country and are interpreted differently. For specific legal advice,
            consult a lawyer in your jurisdiction.
          </p>
        </Card>

        {/* EU-wide protections */}
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Shield className="text-primary" size={20} />
          </div>
          EU-wide protections
        </h2>

        <div className="space-y-4 mb-12">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">
              Digital Services Act (DSA)
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              The DSA requires online platforms operating in the EU to:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              <li>• Respond promptly to reports of illegal content</li>
              <li>• Provide clear and accessible reporting mechanisms</li>
              <li>• Explain decisions when content is or isn't removed</li>
              <li>• Allow users to appeal content moderation decisions</li>
            </ul>
            <div className="bg-muted p-3 rounded-md text-sm">
              <strong>What this means for you:</strong> Major platforms like
              Facebook, Instagram, TikTok, Twitter/X must handle your reports
              according to EU law, regardless of where the company is based.
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">
              GDPR (Data Protection)
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              The General Data Protection Regulation gives you rights over
              images and data that identify you:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              <li>
                • Right to erasure ("right to be forgotten") for personal data
              </li>
              <li>• Right to object to processing of your personal data</li>
              <li>
                • Protection against non-consensual processing of images
              </li>
            </ul>
            <div className="bg-muted p-3 rounded-md text-sm">
              <strong>What this means for you:</strong> You can request removal
              based on privacy violations, especially if images are used for
              commercial purposes or by organizations.
            </div>
          </Card>
        </div>

        {/* National laws */}
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Scale className="text-primary" size={20} />
          </div>
          National laws on intimate image abuse
        </h2>

        <p className="text-sm text-muted-foreground mb-6">
          Many European countries have specific criminal laws against sharing
          intimate images without consent. These laws vary in scope, penalties,
          and how AI-generated content is treated.
        </p>

        <Accordion type="single" collapsible className="space-y-3 mb-12">
          <AccordionItem value="uk" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline font-semibold">
              United Kingdom
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Criminal Justice and Courts Act 2015, Section 33:</strong>{" "}
                Makes it a criminal offense to share private sexual images
                without consent, with intent to cause distress.
              </p>
              <p>
                <strong>Domestic Abuse Act 2021, Section 21:</strong>{" "}
                Criminalizes threatening to share intimate images.
              </p>
              <p className="bg-muted p-3 rounded-md">
                <strong>Maximum penalty:</strong> 2 years imprisonment
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="germany" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline font-semibold">
              Germany
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>§201a StGB (Penal Code):</strong> Criminalizes the
                creation and distribution of intimate images without consent,
                including manipulated or AI-generated images.
              </p>
              <p className="bg-muted p-3 rounded-md">
                <strong>Maximum penalty:</strong> 2 years imprisonment (up to 5
                years for commercial distribution)
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="france" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline font-semibold">
              France
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Article 226-2-1 Penal Code:</strong> Criminalizes
                transmitting intimate images without consent of the person
                depicted, even if consensually made.
              </p>
              <p className="bg-muted p-3 rounded-md">
                <strong>Maximum penalty:</strong> 2 years imprisonment and
                €60,000 fine
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="netherlands" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline font-semibold">
              Netherlands
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Article 139h Criminal Code:</strong> Criminalizes
                sharing intimate images with intent to harm the person's dignity
                or privacy.
              </p>
              <p className="bg-muted p-3 rounded-md">
                <strong>Maximum penalty:</strong> 2 years imprisonment or
                €21,750 fine
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spain" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline font-semibold">
              Spain
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>Article 197.7 Penal Code:</strong> Criminalizes
                disclosing intimate images without authorization, even if
                originally obtained with consent.
              </p>
              <p className="bg-muted p-3 rounded-md">
                <strong>Maximum penalty:</strong> 3 months to 1 year
                imprisonment or fine
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="p-5 mb-12 bg-accent/5 border-accent/20">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">
              Note on AI-generated content:
            </strong>{" "}
            Laws are evolving. Some countries explicitly include
            manipulated/AI-generated images, while others are interpreting
            existing laws to cover them. Legal precedents are still being
            established.
          </p>
        </Card>

        {/* What you can do */}
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="text-primary" size={20} />
          </div>
          What you can do legally
        </h2>

        <div className="space-y-4 mb-12">
          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">
              Report to police
            </h3>
            <p className="text-sm text-muted-foreground">
              In most EU countries, this is a criminal matter. You can file a
              report even if you're unsure whether prosecution will happen.
              Police reports create documentation that can be useful for
              platform removal requests.
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-medium">
              You don't need to know who did it to file a report against
              "unknown perpetrator."
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">
              Civil legal action
            </h3>
            <p className="text-sm text-muted-foreground">
              You may be able to sue for damages, seek injunctions to stop
              further distribution, or request court orders for content removal.
              This varies significantly by country.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Legal aid may be available if you can't afford a lawyer.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">
              Complaints to regulators
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              If platforms don't respond to your reports, you can complain to:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>
                • Your national data protection authority (for GDPR violations)
              </li>
              <li>
                • Digital Services Coordinators (for DSA violations) in your
                country
              </li>
            </ul>
          </Card>
        </div>

        {/* Honest limitations */}
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
            <AlertTriangle className="text-secondary" size={20} />
          </div>
          Honest limitations
        </h2>

        <div className="space-y-4 mb-8">
          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">
              Enforcement is inconsistent
            </h3>
            <p className="text-sm text-muted-foreground">
              Even where laws exist, police resources, training, and
              prioritization vary. Some officers are excellent; others don't
              understand digital crimes.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">
              Cross-border challenges
            </h3>
            <p className="text-sm text-muted-foreground">
              If the perpetrator or platform is in another country, enforcement
              becomes much more difficult. International legal cooperation is
              improving but still slow.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">
              Legal processes take time
            </h3>
            <p className="text-sm text-muted-foreground">
              Criminal cases can take months or years. Civil litigation is
              expensive and lengthy. Platform removal is usually faster than
              legal action.
            </p>
          </Card>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-foreground font-medium">
            The law is on your side, even if the system isn't perfect yet.
            Organizations can help you navigate this — you don't have to become
            a legal expert yourself.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LegalContext;

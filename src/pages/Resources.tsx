import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Phone, Shield, Search, Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryResources: Record<
  string,
  { name: string; description: string; url?: string }[]
> = {
  france: [
    { name: "e-Enfance", description: "Support for minors and cyberbullying victims", url: "https://www.e-enfance.org" },
    { name: "Point de Contact", description: "Reporting illegal online content", url: "https://www.pointdecontact.net" },
    { name: "CNIL", description: "French data protection authority — file GDPR complaints", url: "https://www.cnil.fr" },
  ],
  germany: [
    { name: "HateAid", description: "Legal support for victims of digital violence", url: "https://hateaid.org" },
    { name: "Weisser Ring", description: "Victim support for all crime types", url: "https://weisser-ring.de" },
    { name: "BfDI", description: "Federal data protection commissioner", url: "https://www.bfdi.bund.de" },
  ],
  netherlands: [
    { name: "Offlimits", description: "Support for online sexual exploitation and CSAM", url: "https://offlimits.nl" },
    { name: "Helpwanted.nl", description: "Help with unwanted sexual online experiences", url: "https://helpwanted.nl" },
    { name: "Autoriteit Persoonsgegevens", description: "Dutch data protection authority", url: "https://autoriteitpersoonsgegevens.nl" },
  ],
  spain: [
    { name: "AEPD", description: "Spanish data protection authority", url: "https://www.aepd.es" },
    { name: "INCIBE", description: "National Cybersecurity Institute — helpline 017", url: "https://www.incibe.es" },
  ],
  uk: [
    { name: "Revenge Porn Helpline", description: "Free support for intimate image abuse victims", url: "https://revengepornhelpline.org.uk" },
    { name: "Internet Watch Foundation", description: "Reporting CSAM and intimate image abuse", url: "https://www.iwf.org.uk" },
    { name: "ICO", description: "UK data protection authority", url: "https://ico.org.uk" },
  ],
  italy: [
    { name: "Polizia Postale", description: "Cyber police — report online crimes", url: "https://www.commissariatodips.it" },
    { name: "Garante Privacy", description: "Italian data protection authority", url: "https://www.garanteprivacy.it" },
  ],
  belgium: [
    { name: "Child Focus", description: "Support for minors and online safety", url: "https://www.childfocus.be" },
    { name: "APD/GBA", description: "Belgian data protection authority", url: "https://www.dataprotectionauthority.be" },
  ],
};

const Resources = () => {
  const [country, setCountry] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            A directory of trusted organizations, helplines, and tools to help
            you take action. All services listed are free and confidential.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Content removal tools */}
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Shield className="text-primary" size={20} />
          </div>
          Content removal tools
        </h2>

        <div className="grid gap-4 mb-12">
          <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-foreground text-lg">StopNCII</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Hash-based image removal tool. Prevents intimate images from
                  being uploaded to major platforms (Facebook, Instagram,
                  TikTok, Reddit, Pornhub, and more).
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  <Globe className="inline mr-1" size={12} />
                  Available in: Multiple languages
                </p>
              </div>
              <a
                href="https://stopncii.org"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 shrink-0 flex items-center gap-1 text-sm font-medium"
              >
                Visit <ExternalLink size={14} />
              </a>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  Take It Down
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Specifically for people under 18. Removes or blocks nude,
                  partially nude, or sexually explicit images/videos from online
                  platforms.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  <Globe className="inline mr-1" size={12} />
                  Available in: Multiple languages
                </p>
              </div>
              <a
                href="https://takeitdown.ncmec.org"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 shrink-0 flex items-center gap-1 text-sm font-medium"
              >
                Visit <ExternalLink size={14} />
              </a>
            </div>
          </Card>
        </div>

        {/* Digital security */}
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Search className="text-primary" size={20} />
          </div>
          Digital security resources
        </h2>

        <div className="grid gap-4 mb-12">
          <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  Cyber Civil Rights Initiative
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Resources and guides on online safety, privacy, and dealing
                  with non-consensual intimate images.
                </p>
              </div>
              <a
                href="https://cybercivilrights.org"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 shrink-0 flex items-center gap-1 text-sm font-medium"
              >
                Visit <ExternalLink size={14} />
              </a>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  Coalition Against Stalkerware
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Help detecting and removing spyware or stalkerware from
                  devices.
                </p>
              </div>
              <a
                href="https://stopstalkerware.org"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 shrink-0 flex items-center gap-1 text-sm font-medium"
              >
                Visit <ExternalLink size={14} />
              </a>
            </div>
          </Card>
        </div>

        {/* Country-specific */}
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Phone className="text-primary" size={20} />
          </div>
          Country-specific resources
        </h2>

        <Card className="p-6 mb-6 bg-accent/5 border-accent/20">
          <p className="text-sm text-muted-foreground">
            Select a country below to see national organizations and helplines.
            Or call{" "}
            <strong className="text-foreground">116 006</strong> — the
            Europe-wide victim support number available in many countries.
          </p>
        </Card>

        <div className="mb-6">
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger className="w-full md:w-72">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="belgium">Belgium</SelectItem>
              <SelectItem value="france">France</SelectItem>
              <SelectItem value="germany">Germany</SelectItem>
              <SelectItem value="italy">Italy</SelectItem>
              <SelectItem value="netherlands">Netherlands</SelectItem>
              <SelectItem value="spain">Spain</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {country && countryResources[country] && (
          <div className="grid gap-4">
            {countryResources[country].map((org) => (
              <Card key={org.name} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-foreground">{org.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {org.description}
                    </p>
                  </div>
                  {org.url && (
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-primary/80 shrink-0"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;

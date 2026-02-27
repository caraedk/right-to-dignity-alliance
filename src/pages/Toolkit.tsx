import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Shield,
  Users,
  Scale,
  AlertTriangle,
  FileText,
  Phone,
  BookOpen,
  ChevronRight,
  Heart,
  HandHelping,
  Clock,
  CheckCircle,
  XCircle,
  ExternalLink,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Path = "victim" | "supporter" | null;
type Step =
  | "entry"
  | "triage"
  | "first-actions"
  | "rights"
  | "action-pathways"
  | "platform-logic"
  | "escalation";

const stepLabels: Record<Exclude<Step, "entry">, string> = {
  triage: "1. Situation Assessment",
  "first-actions": "2. First Actions",
  rights: "3. Your Rights",
  "action-pathways": "4. Action Pathways",
  "platform-logic": "5. Platform Interaction",
  escalation: "6. Escalation & Support",
};

const stepOrder: Step[] = [
  "entry",
  "triage",
  "first-actions",
  "rights",
  "action-pathways",
  "platform-logic",
  "escalation",
];

const Toolkit = () => {
  const [path, setPath] = useState<Path>(null);
  const [step, setStep] = useState<Step>("entry");

  const goNext = () => {
    const i = stepOrder.indexOf(step);
    if (i < stepOrder.length - 1) setStep(stepOrder[i + 1]);
  };
  const goBack = () => {
    const i = stepOrder.indexOf(step);
    if (i > 0) setStep(stepOrder[i - 1]);
    if (i === 1) setPath(null);
  };
  const reset = () => {
    setPath(null);
    setStep("entry");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Action Toolkit
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Step-by-step guidance for responding to non-consensual AI-generated
            sexual content — across Europe, under time pressure, and without
            requiring legal or technical expertise.
          </p>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="text-primary" size={20} />
              </div>
              <p className="font-semibold text-foreground text-sm">
                Not a helpline
              </p>
              <p className="text-xs text-muted-foreground">
                We connect you to trusted services but don't provide direct
                support
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Scale className="text-primary" size={20} />
              </div>
              <p className="font-semibold text-foreground text-sm">
                Not legal advice
              </p>
              <p className="text-xs text-muted-foreground">
                We explain your rights in plain language, but we're not lawyers
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={20} />
              </div>
              <p className="font-semibold text-foreground text-sm">
                A practical guide
              </p>
              <p className="text-xs text-muted-foreground">
                Clear steps, trusted partners, and realistic expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress bar */}
      {step !== "entry" && (
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto">
              <button onClick={reset} className="hover:text-primary shrink-0">
                Start
              </button>
              {stepOrder.slice(1).map((s) => (
                <span key={s} className="flex items-center gap-2 shrink-0">
                  <ChevronRight size={14} />
                  <span
                    className={
                      s === step ? "text-primary font-semibold" : ""
                    }
                  >
                    {stepLabels[s as Exclude<Step, "entry">]}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Path-specific banner */}
        {step !== "entry" && path && (
          <div
            className={`mb-8 p-4 rounded-lg border ${
              path === "victim"
                ? "bg-secondary/10 border-secondary/30"
                : "bg-primary/10 border-primary/30"
            }`}
          >
            {path === "victim" ? (
              <p className="text-sm text-foreground">
                <Heart className="inline mr-2 text-secondary" size={16} />
                <strong>You are not alone.</strong> This toolkit will guide you
                through practical steps. You don't have to handle everything
                yourself — take it one step at a time.
              </p>
            ) : (
              <p className="text-sm text-foreground">
                <HandHelping className="inline mr-2 text-primary" size={16} />
                <strong>Supporting someone takes care.</strong> Always act with
                the person's consent. This guide helps you understand what you
                can do — and when to step back.
              </p>
            )}
          </div>
        )}

        {/* ENTRY POINT */}
        {step === "entry" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Who are you right now?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Both paths lead to the same action steps, but with different
                guidance, tone, and responsibilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card
                className="p-8 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-secondary group"
                onClick={() => {
                  setPath("victim");
                  setStep("triage");
                }}
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Heart className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">This happened to me</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Non-consensual content of you has appeared online. We'll guide
                  you through what to do — clearly, safely, and at your pace.
                </p>
                <span className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Start here <ArrowRight size={16} />
                </span>
              </Card>

              <Card
                className="p-8 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-primary group"
                onClick={() => {
                  setPath("supporter");
                  setStep("triage");
                }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <HandHelping className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Someone came to me for help
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Someone you know is affected and reached out. We'll help you
                  support them responsibly, with clear boundaries.
                </p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Start here <ArrowRight size={16} />
                </span>
              </Card>
            </div>
          </div>
        )}

        {/* STEP 1: TRIAGE */}
        {step === "triage" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Situation Assessment
              </h2>
              <p className="text-muted-foreground">
                Let's understand what's happening so we can guide you to the
                right actions. Take a breath — clarity comes first.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="type" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <span className="flex items-center gap-3">
                    <AlertTriangle className="text-accent" size={20} />
                    What type of harm is this?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>AI-generated sexual deepfake</strong> — Synthetic
                    sexual imagery created using AI, depicting a real person
                    without consent.
                  </p>
                  <p>
                    <strong>Sextortion</strong> — Someone is threatening to
                    share intimate (real or fabricated) content unless demands
                    are met.
                  </p>
                  <p>
                    <strong>Non-consensual intimate images (NCII)</strong> — Real
                    intimate images shared without consent.
                  </p>
                  <p>
                    <strong>Harassment / mixed</strong> — Deepfakes used as part
                    of broader harassment or bullying.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="where" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <span className="flex items-center gap-3">
                    <Shield className="text-primary" size={20} />
                    Where is the content circulating?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Public platform</strong> — Social media, forums,
                    websites (Instagram, X, Reddit, Telegram, etc.)
                  </p>
                  <p>
                    <strong>Private sharing</strong> — Messaging apps, group
                    chats, email
                  </p>
                  <p>
                    <strong>Unknown</strong> — You were told about it or found it
                    indirectly
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="urgency"
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="flex items-center gap-3">
                    <Clock className="text-secondary" size={20} />
                    Is this urgent?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Urgent</strong> — Content is actively spreading,
                    threats have been made, a minor is involved, or there is
                    immediate reputational / safety risk.
                  </p>
                  <p>
                    <strong>Medium</strong> — Content exists but is not
                    spreading rapidly. No immediate threats.
                  </p>
                  <p>
                    <strong>Lower</strong> — Content has been contained or is no
                    longer actively shared, but you want to act.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        {/* STEP 2: FIRST ACTIONS */}
        {step === "first-actions" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                First Actions
              </h2>
              <p className="text-muted-foreground">
                Time-critical steps to stabilise the situation and avoid
                irreversible mistakes.
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
                  <CheckCircle className="text-primary" size={20} />
                  Do now
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <strong>Screenshot everything</strong> — URLs, usernames,
                    timestamps, full pages. This is your evidence.
                  </li>
                  <li>
                    • <strong>Use hash-based containment</strong> — Register
                    with{" "}
                    <a
                      href="https://takeitdown.ncmec.org"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline"
                    >
                      Take It Down
                    </a>{" "}
                    (NCMEC) to create a hash of the content for automated
                    detection.
                  </li>
                  <li>
                    • <strong>Secure your accounts</strong> — Change passwords,
                    enable 2FA if the content seems connected to an account
                    compromise.
                  </li>
                  <li>
                    • <strong>Tell one trusted person</strong> — You don't have
                    to do this alone.
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-l-secondary">
                <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
                  <XCircle className="text-secondary" size={20} />
                  Do not do yet
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <strong>Do not confront the person</strong> who created or
                    shared the content — it may escalate.
                  </li>
                  <li>
                    • <strong>Do not delete your own evidence</strong> — you may
                    need it later.
                  </li>
                  <li>
                    • <strong>Do not share the content</strong> further, even to
                    "prove" what happened.
                  </li>
                  <li>
                    • <strong>Do not assume platforms won't act</strong> — try
                    the official channels first.
                  </li>
                </ul>
              </Card>
            </div>

            {path === "supporter" && (
              <Card className="p-5 bg-primary/5 border-primary/20">
                <p className="text-sm text-foreground">
                  <HandHelping
                    className="inline mr-2 text-primary"
                    size={16}
                  />
                  <strong>As a supporter:</strong> Help with documentation and
                  logistics, but don't take actions on the person's behalf
                  without their explicit consent. Ask before reporting.
                </p>
              </Card>
            )}
          </div>
        )}

        {/* STEP 3: RIGHTS */}
        {step === "rights" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Your Rights & Platform Obligations
              </h2>
              <p className="text-muted-foreground">
                EU law translated into practical leverage. Not legal theory —
                operational relevance.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-1">
                  ✅ You can rely on this
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground mt-3">
                  <li>
                    • <strong>GDPR (Art. 17)</strong> — Right to erasure. You
                    can demand deletion of personal data, including deepfakes
                    using your likeness.
                  </li>
                  <li>
                    • <strong>Digital Services Act (DSA)</strong> — Platforms
                    must act on illegal content notices. They must provide
                    transparent content moderation and allow appeals.
                  </li>
                  <li>
                    • <strong>Right to dignity</strong> — Protected under the EU
                    Charter of Fundamental Rights (Art. 1).
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-1">
                  💪 This strengthens your request
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground mt-3">
                  <li>
                    • <strong>AI Act</strong> — Requires labelling and
                    transparency for AI-generated content. Deepfakes must be
                    disclosed.
                  </li>
                  <li>
                    • <strong>National criminal law</strong> — Many EU countries
                    criminalise non-consensual intimate image distribution.
                    Check your country chapter.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-1">
                  ⚠️ Emerging but not solid yet
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground mt-3">
                  <li>
                    • A specific EU-level ban on non-consensual deepfakes is
                    under discussion but not yet enacted.
                  </li>
                  <li>
                    • Enforcement varies significantly between member states.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        )}

        {/* STEP 4: ACTION PATHWAYS */}
        {step === "action-pathways" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Action Pathways
              </h2>
              <p className="text-muted-foreground">
                Real choices, no dead ends. Each path tells you what to do if
                it's blocked.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem
                value="report"
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  Report to the platform
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    Use the platform's official reporting tools for
                    non-consensual intimate images or deepfakes.
                  </p>
                  <p>
                    <strong>If refused →</strong> File a DSA complaint with your
                    national Digital Services Coordinator.
                  </p>
                  <p>
                    <strong>If no response →</strong> Escalate to a trusted
                    organisation (see Step 6).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gdpr" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  Submit a GDPR erasure request
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    Send a written request to the platform's Data Protection
                    Officer citing GDPR Art. 17.
                  </p>
                  <p>
                    <strong>If refused →</strong> File a complaint with your
                    national Data Protection Authority.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="police" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  File a police report
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    In many EU countries, distributing non-consensual intimate
                    images is a criminal offence. File a report with local
                    police.
                  </p>
                  <p>
                    <strong>If police unfamiliar →</strong> Bring a printed
                    summary of relevant national law and DSA obligations.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="containment"
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  Use hash-based containment tools
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    Tools like{" "}
                    <a
                      href="https://takeitdown.ncmec.org"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline"
                    >
                      Take It Down
                    </a>{" "}
                    create a digital fingerprint (hash) of the content to
                    prevent re-uploads across participating platforms.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        {/* STEP 5: PLATFORM LOGIC */}
        {step === "platform-logic" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Platform Interaction
              </h2>
              <p className="text-muted-foreground">
                What to expect from platforms — based on reality, not promises.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-3">
                  What platforms typically respond to
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reports citing specific policy violations</li>
                  <li>
                    • GDPR erasure requests from the depicted person
                  </li>
                  <li>• Content involving minors (fastest response)</li>
                  <li>• Legal orders or regulator involvement</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-3">
                  Common delays & frustrations
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Automated rejections — often the first response is a bot.
                    Appeal.
                  </li>
                  <li>
                    • Slow timelines — initial review can take days to weeks.
                  </li>
                  <li>
                    • Unclear categories — platforms may not have a "deepfake"
                    report option. Use "non-consensual intimate images" or
                    "impersonation."
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-3">
                  Language that carries weight
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Reference the <strong>Digital Services Act</strong>{" "}
                    explicitly
                  </li>
                  <li>
                    • Use the term{" "}
                    <strong>"non-consensual intimate image"</strong> — platforms
                    have policies for this
                  </li>
                  <li>
                    • Mention <strong>GDPR Art. 17</strong> for erasure requests
                  </li>
                  <li>
                    • State that you have{" "}
                    <strong>preserved evidence</strong> and may escalate to
                    regulators
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        )}

        {/* STEP 6: ESCALATION */}
        {step === "escalation" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Escalation & External Support
              </h2>
              <p className="text-muted-foreground">
                When this toolkit is not enough — trusted organisations that can
                help.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  name: "CCRI (Cyber Civil Rights Initiative)",
                  when: "NCII / sextortion, especially US-linked platforms",
                  url: "https://cybercivilrights.org",
                },
                {
                  name: "Offlimits",
                  when: "Illegal content, CSAM, Netherlands-based support",
                  url: "https://offlimits.nl",
                },
                {
                  name: "Take It Down (NCMEC)",
                  when: "Hash-based containment for minors and adults",
                  url: "https://takeitdown.ncmec.org",
                },
                {
                  name: "Access Now",
                  when: "Account compromise, stalking, digital security",
                  url: "https://www.accessnow.org",
                },
                {
                  name: "AI HEEELP",
                  when: "Systemic AI harm reporting",
                  url: "#",
                },
                {
                  name: "Hollaback",
                  when: "Bystander intervention, education",
                  url: "https://www.ihollaback.org",
                },
              ].map((org) => (
                <Card key={org.name} className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-foreground">{org.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {org.when}
                      </p>
                    </div>
                    {org.url !== "#" && (
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

            <Card className="p-6 bg-secondary/10 border-secondary/30">
              <p className="text-sm text-foreground">
                <strong>Right to Dignity Alliance</strong> does coordination,
                not service delivery. We connect you to the right actor and
                track where systems fail — so they can be fixed for everyone.
              </p>
            </Card>
          </div>
        )}

        {/* Navigation buttons */}
        {step !== "entry" && (
          <div className="flex justify-between mt-10 pt-6 border-t border-border">
            <Button variant="outline" onClick={goBack}>
              <ArrowLeft size={16} className="mr-2" />
              Back
            </Button>
            {step !== "escalation" ? (
              <Button onClick={goNext}>
                Next <ArrowRight size={16} className="ml-2" />
              </Button>
            ) : (
              <Button onClick={reset} variant="secondary">
                Start over
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolkit;

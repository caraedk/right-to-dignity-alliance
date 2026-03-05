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
  BookOpen,
  ChevronRight,
  Heart,
  HandHelping,
  CheckCircle,
  XCircle,
  ExternalLink,
  Camera,
  Ban,
  MessageCircle,
  Globe,
  Search,
  Lock,
  MapPin,
  Phone,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Path = "victim" | "supporter" | null;
type Step =
  | "entry"
  | "welcome"
  | "triage"
  | "triage-result"
  | "first-actions"
  | "limit-spread"
  | "legal"
  | "who-can-help"
  | "country-help";

type TriageAnswer = "yes" | "no" | "not-sure" | null;

interface TriageState {
  sexualised: TriageAnswer;
  aiGenerated: TriageAnswer;
  minor: TriageAnswer;
  spreading: TriageAnswer;
}

const triageQuestions = [
  {
    key: "sexualised" as keyof TriageState,
    question: "Is the content sexualised?",
    description: "This includes nudity, sexual acts, or sexually suggestive imagery",
  },
  {
    key: "aiGenerated" as keyof TriageState,
    question: "Is it AI-generated or manipulated?",
    description: "Created or altered by artificial intelligence, deepfakes, or face-swapping",
  },
  {
    key: "minor" as keyof TriageState,
    question: "Is the person depicted a minor?",
    description: "Under 18 years old",
  },
  {
    key: "spreading" as keyof TriageState,
    question: "Is the content spreading or being used to threaten?",
    description: "Shared publicly, sent to others, or used for extortion or coercion",
  },
];

const countryResources: Record<string, { name: string; orgs: { name: string; description: string; url?: string; phone?: string }[] }> = {
  france: {
    name: "France",
    orgs: [
      { name: "e-Enfance / 3018", description: "National helpline for online violence, cyberbullying, and image-based abuse. Free and confidential.", phone: "3018", url: "https://e-enfance.org" },
      { name: "Centre Hubertine Auclert", description: "Resources on cyber-violence and gender-based digital violence.", url: "https://www.centre-hubertine-auclert.fr" },
      { name: "Pharos", description: "Government platform to report illegal online content.", url: "https://www.internet-signalement.gouv.fr" },
    ],
  },
  germany: {
    name: "Germany",
    orgs: [
      { name: "HateAid", description: "Free legal support and counseling for victims of digital violence.", url: "https://hateaid.org" },
      { name: "Weisser Ring", description: "Victim support organization providing emotional and practical help.", phone: "116 006", url: "https://weisser-ring.de" },
      { name: "jugendschutz.net", description: "Reports and removes harmful content involving minors.", url: "https://www.jugendschutz.net" },
    ],
  },
  netherlands: {
    name: "Netherlands",
    orgs: [
      { name: "Offlimits (formerly Helpwanted)", description: "Expert support for online sexual violence and image-based abuse.", url: "https://offlimits.nl" },
      { name: "Slachtofferhulp Nederland", description: "Victim support services including digital crimes.", phone: "0900 0101", url: "https://www.slachtofferhulp.nl" },
    ],
  },
  spain: {
    name: "Spain",
    orgs: [
      { name: "ANAR Foundation", description: "Help for minors and families dealing with online abuse.", phone: "900 20 20 10", url: "https://www.anar.org" },
      { name: "INCIBE (017)", description: "National cybersecurity helpline for online safety issues.", phone: "017", url: "https://www.incibe.es" },
    ],
  },
  uk: {
    name: "United Kingdom",
    orgs: [
      { name: "Revenge Porn Helpline", description: "Specialist support for intimate image abuse. Can help with content removal.", url: "https://revengepornhelpline.org.uk" },
      { name: "Victim Support", description: "Free, confidential support for victims of crime.", phone: "08 08 16 89 111", url: "https://www.victimsupport.org.uk" },
      { name: "Internet Watch Foundation", description: "Reports and removes child sexual abuse material online.", url: "https://www.iwf.org.uk" },
    ],
  },
  italy: {
    name: "Italy",
    orgs: [
      { name: "Telefono Rosa", description: "Support for women experiencing violence, including digital abuse.", phone: "1522", url: "https://www.telefonorosa.it" },
      { name: "Polizia Postale", description: "Italian postal police — handles online crimes and can receive reports.", url: "https://www.commissariatodips.it" },
    ],
  },
  belgium: {
    name: "Belgium",
    orgs: [
      { name: "Child Focus", description: "Support for online exploitation and image-based abuse involving minors.", phone: "116 000", url: "https://childfocus.be" },
      { name: "Institute for Equality", description: "Reports and support for gender-based violence including digital abuse.", url: "https://igvm-iefh.belgium.be" },
    ],
  },
  portugal: {
    name: "Portugal",
    orgs: [
      { name: "APAV", description: "Portuguese Association for Victim Support — free and confidential.", phone: "116 006", url: "https://apav.pt" },
      { name: "Internet Segura", description: "Safe internet awareness and reporting platform.", url: "https://www.internetsegura.pt" },
    ],
  },
  sweden: {
    name: "Sweden",
    orgs: [
      { name: "Brottsofferjouren", description: "Crime victim support services across Sweden.", phone: "116 006", url: "https://www.brottsofferjouren.se" },
      { name: "ECPAT Sweden", description: "Works against sexual exploitation of children, including online.", url: "https://ecpat.se" },
    ],
  },
  ireland: {
    name: "Ireland",
    orgs: [
      { name: "Hotline.ie", description: "Report illegal content online, including intimate image abuse.", url: "https://www.hotline.ie" },
      { name: "Women's Aid", description: "Support for women experiencing domestic and digital abuse.", phone: "1800 341 900", url: "https://www.womensaid.ie" },
    ],
  },
};

const Toolkit = () => {
  const [path, setPath] = useState<Path>(null);
  const [step, setStep] = useState<Step>("entry");
  const [triageIndex, setTriageIndex] = useState(0);
  const [triage, setTriage] = useState<TriageState>({
    sexualised: null,
    aiGenerated: null,
    minor: null,
    spreading: null,
  });
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const goTo = (s: Step) => setStep(s);
  const goBack = () => {
    const flow: Step[] = [
      "entry", "welcome", "triage", "triage-result",
      "first-actions", "limit-spread", "legal", "who-can-help", "country-help",
    ];
    const i = flow.indexOf(step);
    if (step === "triage" && triageIndex > 0) {
      setTriageIndex(triageIndex - 1);
      return;
    }
    if (i > 0) setStep(flow[i - 1]);
    if (i === 1) setPath(null);
  };
  const reset = () => {
    setPath(null);
    setStep("entry");
    setTriageIndex(0);
    setTriage({ sexualised: null, aiGenerated: null, minor: null, spreading: null });
    setSelectedCountry("");
  };

  const answerTriage = (answer: TriageAnswer) => {
    const key = triageQuestions[triageIndex].key;
    setTriage((prev) => ({ ...prev, [key]: answer }));
    if (triageIndex < triageQuestions.length - 1) {
      setTriageIndex(triageIndex + 1);
    } else {
      setStep("triage-result");
    }
  };

  // Derive urgency from triage
  const isUrgent = triage.minor === "yes" || triage.spreading === "yes";
  const isSexualised = triage.sexualised === "yes" || triage.sexualised === "not-sure";
  const isAI = triage.aiGenerated === "yes" || triage.aiGenerated === "not-sure";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Action Toolkit</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Step-by-step guidance for responding to non-consensual AI-generated sexual content — across Europe, under time pressure, and without requiring legal or technical expertise.
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
              <p className="font-semibold text-foreground text-sm">Not a helpline</p>
              <p className="text-xs text-muted-foreground">We connect you to trusted services but don't provide direct support</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Scale className="text-primary" size={20} />
              </div>
              <p className="font-semibold text-foreground text-sm">Not legal advice</p>
              <p className="text-xs text-muted-foreground">We explain your rights in plain language, but we're not lawyers</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={20} />
              </div>
              <p className="font-semibold text-foreground text-sm">A practical guide</p>
              <p className="text-xs text-muted-foreground">Clear steps, trusted partners, and realistic expectations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress breadcrumb */}
      {step !== "entry" && step !== "triage" && (
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto">
              <button onClick={reset} className="hover:text-primary shrink-0">Start</button>
              {(["first-actions", "limit-spread", "legal", "who-can-help", "country-help"] as Step[]).map((s) => {
                const labels: Record<string, string> = {
                  "first-actions": "First Actions",
                  "limit-spread": "Limit Spread",
                  legal: "Legal",
                  "who-can-help": "Who Can Help",
                  "country-help": "Your Country",
                };
                return (
                  <span key={s} className="flex items-center gap-2 shrink-0">
                    <ChevronRight size={14} />
                    <button onClick={() => goTo(s)} className={`hover:text-primary ${s === step ? "text-primary font-semibold" : ""}`}>
                      {labels[s]}
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-10 max-w-4xl">

        {/* ENTRY */}
        {step === "entry" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Who are you right now?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Both paths lead to the same action steps, but with different guidance, tone, and responsibilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-secondary group" onClick={() => { setPath("victim"); setStep("welcome"); }}>
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Heart className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">This happened to me</h3>
                <p className="text-muted-foreground text-sm mb-4">Non-consensual content of you has appeared online. We'll guide you through what to do — clearly, safely, and at your pace.</p>
                <span className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Start here <ArrowRight size={16} /></span>
              </Card>
              <Card className="p-8 cursor-pointer hover:shadow-lg transition-all border-2 hover:border-primary group" onClick={() => { setPath("supporter"); setStep("welcome"); }}>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <HandHelping className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Someone came to me for help</h3>
                <p className="text-muted-foreground text-sm mb-4">Someone you know is affected and reached out. We'll help you support them responsibly, with clear boundaries.</p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Start here <ArrowRight size={16} /></span>
              </Card>
            </div>
          </div>
        )}

        {/* WELCOME - VICTIM */}
        {step === "welcome" && path === "victim" && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-secondary" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">We'll take this step by step.</h2>
              <div className="space-y-4 text-lg text-muted-foreground text-left">
                <div className="flex items-start gap-3"><CheckCircle className="text-primary shrink-0 mt-1" size={20} /><p>You don't have to do everything</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="text-primary shrink-0 mt-1" size={20} /><p>You can stop at any point</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="text-primary shrink-0 mt-1" size={20} /><p>We'll help you decide what matters now</p></div>
                <div className="flex items-start gap-3"><Shield className="text-primary shrink-0 mt-1" size={20} /><p>Nothing you see here will be saved or tracked</p></div>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <Button size="lg" onClick={() => { setTriageIndex(0); setStep("triage"); }}>
                Continue <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* WELCOME - SUPPORTER */}
        {step === "welcome" && path === "supporter" && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <HandHelping className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">First things first</h2>
              <p className="text-lg text-muted-foreground mb-6">Take a breath. Here's what to focus on right now.</p>
            </div>
            <Card className="p-6 bg-primary/5 border-primary/20">
              <p className="text-sm text-foreground">
                <HandHelping className="inline mr-2 text-primary" size={16} />
                <strong>As a supporter:</strong> Always act with the person's consent. Help with documentation and logistics, but don't take actions on their behalf without explicit permission.
              </p>
            </Card>
            <div className="flex justify-center pt-4">
              <Button size="lg" onClick={() => { setTriageIndex(0); setStep("triage"); }}>
                Continue <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* TRIAGE QUESTIONS */}
        {step === "triage" && (
          <div className="space-y-8 max-w-lg mx-auto">
            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {triageIndex + 1} of {triageQuestions.length}</span>
                <span>{Math.round(((triageIndex + 1) / triageQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${((triageIndex + 1) / triageQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {triageQuestions[triageIndex].question}
              </h2>
              <p className="text-muted-foreground">
                {triageQuestions[triageIndex].description}
              </p>
            </div>

            {/* Answers */}
            <div className="space-y-3">
              {(["yes", "no", "not-sure"] as TriageAnswer[]).map((answer) => {
                const currentAnswer = triage[triageQuestions[triageIndex].key];
                const isSelected = currentAnswer === answer;
                return (
                  <button
                    key={answer}
                    onClick={() => answerTriage(answer)}
                    className={`w-full p-4 rounded-lg border-2 text-center font-medium transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/50 hover:shadow-sm"
                    }`}
                  >
                    {answer === "yes" ? "Yes" : answer === "no" ? "No" : "Not sure"}
                  </button>
                );
              })}
            </div>

            {/* Back */}
            {triageIndex > 0 && (
              <div className="pt-2">
                <Button variant="ghost" onClick={goBack}>
                  <ArrowLeft size={16} className="mr-2" /> Previous question
                </Button>
              </div>
            )}
          </div>
        )}

        {/* TRIAGE RESULT */}
        {step === "triage-result" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Your situation</h2>
              <p className="text-muted-foreground">Based on your answers, here's what we recommend focusing on.</p>
            </div>

            {/* Urgency banner */}
            {isUrgent && (
              <Card className="p-5 border-2 border-secondary bg-secondary/10">
                <p className="font-bold text-foreground flex items-center gap-2 mb-1">
                  <AlertTriangle className="text-secondary" size={20} />
                  This situation is urgent
                </p>
                <p className="text-sm text-muted-foreground">
                  {triage.minor === "yes"
                    ? "Content involving a minor requires immediate action. Take It Down (NCMEC) is specifically designed for this — use it first."
                    : "Content is actively spreading or being used to threaten. Focus on containment first."}
                </p>
              </Card>
            )}

            {/* Summary cards */}
            <div className="grid gap-4">
              {isSexualised && (
                <Card className="p-5 border-l-4 border-l-primary">
                  <h4 className="font-bold text-foreground mb-1">Sexualised content identified</h4>
                  <p className="text-sm text-muted-foreground">Platform reporting and hash-based tools (StopNCII) are your strongest first steps. Most platforms have specific policies for this.</p>
                </Card>
              )}
              {isAI && (
                <Card className="p-5 border-l-4 border-l-primary">
                  <h4 className="font-bold text-foreground mb-1">AI-generated or manipulated content</h4>
                  <p className="text-sm text-muted-foreground">The EU AI Act requires disclosure of AI-generated content. This strengthens your reporting and legal position. Mention this when reporting to platforms.</p>
                </Card>
              )}
              {triage.minor === "yes" && (
                <Card className="p-5 border-l-4 border-l-secondary">
                  <h4 className="font-bold text-foreground mb-1">A minor is involved</h4>
                  <p className="text-sm text-muted-foreground">
                    Use <a href="https://takeitdown.ncmec.org" target="_blank" rel="noreferrer" className="text-primary underline font-medium">Take It Down</a> immediately. Platforms prioritise removal of content involving minors. Consider reporting to police — this is a criminal matter in all EU countries.
                  </p>
                </Card>
              )}
              {triage.spreading === "yes" && (
                <Card className="p-5 border-l-4 border-l-secondary">
                  <h4 className="font-bold text-foreground mb-1">Content is spreading or used as threat</h4>
                  <p className="text-sm text-muted-foreground">Prioritise containment: report to every platform where it appears, use StopNCII to prevent re-uploads, and request search engine removal. If threats are involved, save all evidence and consider police reporting.</p>
                </Card>
              )}
              {!isSexualised && !isAI && triage.minor !== "yes" && triage.spreading !== "yes" && (
                <Card className="p-5 border-l-4 border-l-primary">
                  <h4 className="font-bold text-foreground mb-1">We'll guide you through next steps</h4>
                  <p className="text-sm text-muted-foreground">Even if you're unsure about the details, the toolkit can help. Proceed to see what actions are available to you.</p>
                </Card>
              )}
            </div>

            <div className="flex justify-center pt-4">
              <Button size="lg" onClick={() => setStep("first-actions")}>
                See what to do now <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* FIRST ACTIONS */}
        {step === "first-actions" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {path === "victim" ? "First things first" : "Help them with these first steps"}
              </h2>
              <p className="text-muted-foreground">
                {path === "victim" ? "Take a breath. Here's what to focus on right now." : "Guide the person through these actions — with their consent."}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-4 text-lg">
                <CheckCircle className="text-primary" size={22} /> Do this now
              </h3>
              <div className="grid gap-4">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h4 className="font-bold text-foreground flex items-center gap-2 mb-2"><Camera className="text-primary" size={18} /> Save evidence</h4>
                  <p className="text-sm text-muted-foreground mb-2">Take screenshots of the content, URLs, usernames, and any threats or messages. Include timestamps. Save these somewhere safe but private — not on cloud storage that might sync.</p>
                  <p className="text-sm text-muted-foreground italic">You don't need to look at the content yourself if it's too distressing. Ask someone you trust to help.</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <h4 className="font-bold text-foreground flex items-center gap-2 mb-2"><Ban className="text-primary" size={18} /> Don't engage with the perpetrator</h4>
                  <p className="text-sm text-muted-foreground">Block them if you know who they are. Don't respond to messages or threats. Engagement can escalate the situation or be used against you later.</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-primary">
                  <h4 className="font-bold text-foreground flex items-center gap-2 mb-2"><MessageCircle className="text-primary" size={18} /> Tell someone you trust</h4>
                  <p className="text-sm text-muted-foreground">If you can, tell a friend, family member, or colleague. You don't have to handle this alone. Even just one person knowing can help.</p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-4 text-lg">
                <XCircle className="text-secondary" size={22} /> Don't do this yet
              </h3>
              <div className="grid gap-4">
                <Card className="p-6 border-l-4 border-l-secondary">
                  <h4 className="font-bold text-foreground mb-2">Don't negotiate or pay</h4>
                  <p className="text-sm text-muted-foreground">If someone is threatening you or demanding payment, do not comply. This rarely stops the behaviour and can make you a continued target.</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-secondary">
                  <h4 className="font-bold text-foreground mb-2">Don't delete your evidence</h4>
                  <p className="text-sm text-muted-foreground">Even if it's painful to keep, you may need this documentation for reporting to platforms, police, or legal processes. Keep it stored securely.</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-secondary">
                  <h4 className="font-bold text-foreground mb-2">Don't blame yourself</h4>
                  <p className="text-sm text-muted-foreground">This is not your fault. It doesn't matter what you shared, wore, or did. The person who created or shared this content is responsible — not you.</p>
                </Card>
              </div>
            </div>

            <Card className="p-6 bg-muted/50 border-muted text-center">
              <p className="text-foreground font-medium mb-1">You've already taken an important step by being here.</p>
              <p className="text-sm text-muted-foreground">Take your time with the next decisions.</p>
            </Card>
          </div>
        )}

        {/* LIMIT THE SPREAD */}
        {step === "limit-spread" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Limit the spread</h2>
              <p className="text-muted-foreground">This doesn't solve everything, but it helps contain harm.</p>
            </div>

            <Card className="p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-3"><Shield className="text-primary" size={20} /> Image/video removal prevention</h3>
              <p className="text-sm text-muted-foreground mb-3">StopNCII creates a unique "hash" of your image without anyone viewing it. Major platforms like Facebook, Instagram, and TikTok will automatically block it from being uploaded.</p>
              <a href="https://stopncii.org" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline mb-3">Visit StopNCII.org <ExternalLink size={14} /></a>
              <p className="text-xs text-muted-foreground italic">What to expect: The process takes about 10 minutes. Your image stays on your device — they never see it.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-3"><Globe className="text-primary" size={20} /> Report to platforms</h3>
              <p className="text-sm text-muted-foreground mb-4">Most social media platforms and websites have policies against non-consensual sexual content. Report directly where the content appears.</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  { name: "Instagram", url: "https://help.instagram.com/contact/504521742987441" },
                  { name: "Twitter/X", url: "https://help.twitter.com/en/forms/safety-and-sensitive-content/non-consensual-nudity" },
                  { name: "Facebook", url: "https://www.facebook.com/help/contact/567360146613371" },
                ].map((p) => (
                  <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">{p.name}</a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic">What to expect: Platforms usually respond within 24-48 hours. Save confirmation emails.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-3"><Search className="text-primary" size={20} /> Remove from search results</h3>
              <p className="text-sm text-muted-foreground mb-3">Request removal from Google and other search engines. This won't delete the content from the original site, but it makes it much harder to find.</p>
              <a href="https://support.google.com/websearch/troubleshooter/9685456" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline mb-3">Google removal request <ExternalLink size={14} /></a>
              <p className="text-xs text-muted-foreground italic">What to expect: Google processes requests within a few days. Removal from search ≠ deletion from internet.</p>
            </Card>

            <Card className="p-5 bg-muted/50 border-muted">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><AlertTriangle className="text-accent" size={18} /> Removal ≠ resolution</h4>
              <p className="text-sm text-muted-foreground">These tools help limit harm, but they can't guarantee complete removal. Content can be re-uploaded, shared privately, or hosted on sites that don't cooperate. This is a starting point, not an endpoint.</p>
            </Card>
          </div>
        )}

        {/* LEGAL SOLUTIONS */}
        {step === "legal" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Legal solutions</h2>
              <p className="text-muted-foreground">What you have the right to expect — in practice.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Your rights across Europe</h3>
              <div className="grid gap-4">
                {[
                  { title: "Platforms must respond", text: "Under EU law (Digital Services Act), platforms have legal obligations to handle reports of illegal content, including non-consensual intimate images. They must act on valid reports." },
                  { title: "Non-consensual sexual content is not acceptable", text: "Many European countries have specific laws criminalizing the creation and distribution of non-consensual intimate images, including AI-generated content. This is recognized as a form of sexual violence." },
                  { title: "You can report to police", text: "You have the right to report this as a crime. Depending on your country, this may fall under harassment, defamation, sexual offenses, or specific image-based abuse laws." },
                  { title: "You can get support", text: "Victim support services across Europe are trained to help with digital and sexual violence. You have the right to access these services, often free of charge." },
                ].map((item) => (
                  <Card key={item.title} className="p-6 border-l-4 border-l-primary">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">What is still unclear</h3>
              <div className="grid gap-4">
                {[
                  { title: "Enforcement differs", text: "Laws exist, but how police, prosecutors, and courts handle these cases varies widely by country and region. Not all authorities are trained in image-based abuse yet." },
                  { title: "Some laws are still emerging", text: "AI-generated sexual content is newer than the laws in many countries. Legal frameworks are catching up, but there may be gaps in how your specific situation is covered." },
                  { title: "Cross-border cases are complex", text: "If the perpetrator or content is in a different country, legal action becomes more complicated. International cooperation is improving but still inconsistent." },
                ].map((item) => (
                  <Card key={item.title} className="p-6 border-l-4 border-l-accent">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-muted/50 border-muted">
              <p className="text-sm text-foreground">You don't need to become a legal expert. Knowing your rights is about <strong>confidence, not perfection</strong>. Organizations exist to help you navigate this.</p>
            </Card>
          </div>
        )}

        {/* WHO CAN HELP */}
        {step === "who-can-help" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Who can help</h2>
              <p className="text-muted-foreground">You don't have to handle this alone. Here's who to turn to, and when.</p>
            </div>

            <Card className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Users className="text-primary" size={24} /></div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">National support organizations</h3>
                  <p className="text-sm text-muted-foreground mt-1">Local organizations understand your country's laws, culture, and resources.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">What they help with:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Emotional support and crisis counseling</li>
                    <li>• Navigating police reports</li>
                    <li>• Legal advice and referrals</li>
                    <li>• Advocacy with platforms or authorities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">When to contact them:</h4>
                  <p className="text-sm text-muted-foreground">As soon as you're ready. They're trained to help and won't pressure you into any specific action.</p>
                  <h4 className="font-semibold text-foreground text-sm mb-2 mt-3">What to expect:</h4>
                  <p className="text-sm text-muted-foreground">Confidential, non-judgmental support. They'll explain options and let you decide next steps.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0"><Shield className="text-secondary" size={24} /></div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Image-based abuse specialists</h3>
                  <p className="text-sm text-muted-foreground mt-1">Organizations focusing on non-consensual intimate images, deepfakes, and digital sexual abuse.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">What they help with:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Content removal from multiple platforms</li>
                    <li>• Hash-based prevention tools</li>
                    <li>• Dealing with re-uploads</li>
                    <li>• Specific advice for AI-generated content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">When to contact them:</h4>
                  <p className="text-sm text-muted-foreground">When content is spreading across multiple platforms, or when you need technical help with removal.</p>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground text-sm mb-2">Examples:</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Revenge Porn Helpline (UK)", url: "https://revengepornhelpline.org.uk" },
                    { name: "HateAid (Germany)", url: "https://hateaid.org" },
                    { name: "e-Enfance (France)", url: "https://e-enfance.org" },
                  ].map((org) => (
                    <a key={org.name} href={org.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">{org.name} <ExternalLink size={12} /></a>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0"><Lock className="text-accent-foreground" size={24} /></div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Digital security help</h3>
                  <p className="text-sm text-muted-foreground mt-1">If you're worried about being hacked, tracked, or your accounts being compromised.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">What they help with:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Securing your accounts and devices</li>
                    <li>• Checking for spyware or stalkerware</li>
                    <li>• Privacy settings and online safety</li>
                    <li>• Preventing further image collection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">When to contact them:</h4>
                  <p className="text-sm text-muted-foreground">If you think someone has access to your device, accounts, or location. Or if you want to prevent the perpetrator from getting more images.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted/50 border-muted text-center">
              <p className="text-sm text-foreground">These organizations exist because this happens, and because people deserve support. Reaching out doesn't mean handing over control — it means <strong>collaboration on your terms</strong>.</p>
            </Card>
          </div>
        )}

        {/* FIND HELP IN YOUR COUNTRY */}
        {step === "country-help" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Find help in your country</h2>
              <p className="text-muted-foreground">The core guidance stays the same — this shows you who to contact locally.</p>
            </div>

            {/* Country selector */}
            <div>
              <label className="text-sm font-semibold text-foreground block mb-2">Select your country</label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-full max-w-sm">
                  <SelectValue placeholder="Choose a country..." />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(countryResources).sort((a, b) => a[1].name.localeCompare(b[1].name)).map(([key, val]) => (
                    <SelectItem key={key} value={key}>{val.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Country-specific orgs */}
            {selectedCountry && countryResources[selectedCountry] && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">{countryResources[selectedCountry].name}</h3>
                {countryResources[selectedCountry].orgs.map((org) => (
                  <Card key={org.name} className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-foreground">{org.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{org.description}</p>
                        {org.phone && (
                          <p className="text-sm text-primary font-medium mt-2 flex items-center gap-1">
                            <Phone size={14} /> {org.phone}
                          </p>
                        )}
                      </div>
                      {org.url && (
                        <a href={org.url} target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 shrink-0">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* EU-wide */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Europe-wide resources</h3>

              <Card className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">116 006 — Victim Support Europe</h4>
                    <p className="text-sm text-muted-foreground mt-1">Free helpline available in many European countries for victims of crime. Services available in local languages.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">WAVE Network</h4>
                      <p className="text-sm text-muted-foreground mt-1">European Network on Domestic Violence — can connect you to local services.</p>
                    </div>
                  </div>
                  <a href="https://wave-network.org" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 shrink-0">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        {step !== "entry" && step !== "triage" && (
          <div className="flex justify-between mt-10 pt-6 border-t border-border">
            <Button variant="outline" onClick={goBack}>
              <ArrowLeft size={16} className="mr-2" /> Back
            </Button>
            {step === "welcome" && (
              <Button onClick={() => { setTriageIndex(0); setStep("triage"); }}>
                Continue <ArrowRight size={16} className="ml-2" />
              </Button>
            )}
            {step === "triage-result" && (
              <Button onClick={() => setStep("first-actions")}>
                See what to do now <ArrowRight size={16} className="ml-2" />
              </Button>
            )}
            {step === "first-actions" && (
              <Button onClick={() => setStep("limit-spread")}>
                Limit the spread <ArrowRight size={16} className="ml-2" />
              </Button>
            )}
            {step === "limit-spread" && (
              <Button onClick={() => setStep("legal")}>
                Legal solutions <ArrowRight size={16} className="ml-2" />
              </Button>
            )}
            {step === "legal" && (
              <Button onClick={() => setStep("who-can-help")}>
                Who can help <ArrowRight size={16} className="ml-2" />
              </Button>
            )}
            {step === "who-can-help" && (
              <Button onClick={() => setStep("country-help")}>
                Find help in your country <MapPin size={16} className="ml-2" />
              </Button>
            )}
            {step === "country-help" && (
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

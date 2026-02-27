import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  Smartphone,
  Users,
  Search,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProtectYourself = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Protect yourself
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Proactive steps to protect your digital privacy and reduce the risk
            of non-consensual AI-generated content being created of you.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Prevention notice */}
        <Card className="p-6 mb-8 border-l-4 border-l-accent bg-accent/5">
          <h2 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="text-accent" size={20} />
            Prevention vs. resolution
          </h2>
          <p className="text-sm text-muted-foreground">
            These steps reduce risk but can't eliminate it entirely. If
            non-consensual content has already been created, visit{" "}
            <Link to="/toolkit" className="text-primary underline font-medium">
              Get help now
            </Link>{" "}
            for response guidance.
          </p>
        </Card>

        {/* Section 1: Social Media */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="text-primary" size={20} />
              </div>
              Lock down your social media
            </h2>
          </div>

          <Accordion type="multiple" className="space-y-3">
            <AccordionItem value="private" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Set all accounts to private
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Make Instagram, Facebook, TikTok, and other accounts private
                  so only approved followers can see your posts and photos. This
                  limits who can collect images of you.
                </p>
                <p className="bg-muted p-3 rounded-md">
                  <strong>How:</strong> Go to Settings → Privacy → Switch
                  account to Private
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="location" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Remove location tags
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Turn off location sharing on posts. Location data can be used
                  to track you or identify where you live, work, or spend time.
                </p>
                <p className="bg-muted p-3 rounded-md">
                  <strong>How:</strong> Before posting, remove location tags.
                  Disable "Add location automatically" in app settings.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tagging" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Disable photo tagging by others
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Prevent people from tagging you in photos without permission.
                  This gives you control over what images are publicly associated
                  with your name.
                </p>
                <div className="bg-muted p-3 rounded-md space-y-1">
                  <p>
                    <strong>Facebook:</strong> Settings → Timeline and Tagging →
                    Review tags before they appear
                  </p>
                  <p>
                    <strong>Instagram:</strong> Settings → Privacy → Tags →
                    Manually approve tags
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="download" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Limit who can download your photos
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Some platforms allow you to prevent others from downloading or
                  sharing your images directly.
                </p>
                <p className="bg-muted p-3 rounded-md">
                  <strong>Instagram:</strong> You can't fully prevent downloads,
                  but disabling sharing to Stories limits redistribution
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Section 2: Control images */}
        <div className="space-y-8 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="text-primary" size={20} />
              </div>
              Control your images online
            </h2>
          </div>

          <Accordion type="multiple" className="space-y-3">
            <AccordionItem value="audit" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Audit what's already out there
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Search for yourself using Google Images and reverse image
                  search. This shows what photos of you are publicly accessible.
                </p>
                <p className="bg-muted p-3 rounded-md">
                  <strong>How:</strong> Use Google Images, TinEye, or Yandex
                  reverse image search with a photo of yourself
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="remove-old" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Remove old photos from public view
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <p>
                  Go through old social media posts and delete or make private
                  any photos you no longer want publicly accessible. The fewer
                  images available, the harder it is to create realistic AI
                  content.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="selective" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Be selective about what you share
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <p>
                  Before posting photos of yourself, consider: Do I want this to
                  be permanently public? Could this be misused? There's no
                  "wrong" way to present yourself, but awareness helps you make
                  informed choices.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="watermark" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Add watermarks or visual disruption (limited effectiveness)
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <p>
                  Some people add watermarks or use tools that claim to "poison"
                  AI training. These can help slightly but are not foolproof —
                  determined actors can work around them.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Section 3: Secure devices */}
        <div className="space-y-8 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Smartphone className="text-primary" size={20} />
              </div>
              Secure your devices and accounts
            </h2>
          </div>

          <Accordion type="multiple" className="space-y-3">
            <AccordionItem value="passwords" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Use strong, unique passwords
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <p>
                  Use a password manager (like Bitwarden, 1Password, or LastPass)
                  to create strong, unique passwords for every account. This
                  prevents someone from accessing all your accounts if one is
                  compromised.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="2fa" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Enable two-factor authentication (2FA)
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Turn on 2FA for all social media, email, and cloud storage
                  accounts. This adds a second layer of protection beyond your
                  password.
                </p>
                <p className="bg-muted p-3 rounded-md">
                  <strong>How:</strong> Settings → Security → Two-Factor
                  Authentication. Use an authenticator app (Google Authenticator,
                  Authy) instead of SMS when possible.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="apps" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Review connected apps and permissions
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Remove third-party apps that have access to your photos or
                  social media accounts. Old or unused apps can be security
                  risks.
                </p>
                <p className="bg-muted p-3 rounded-md">
                  <strong>How:</strong> Settings → Apps and Websites → Remove
                  apps you don't recognize or no longer use
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="spyware" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Check for spyware or stalkerware
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  If you're in an abusive relationship or suspect someone has
                  access to your device, they may have installed monitoring
                  software.
                </p>
                <p className="bg-muted p-3 rounded-md">
                  <strong>Resources:</strong>{" "}
                  <a
                    href="https://stopstalkerware.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    Coalition Against Stalkerware
                  </a>{" "}
                  provides guides for detection and removal
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Section 4: Relationships */}
        <div className="space-y-8 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="text-primary" size={20} />
              </div>
              Navigate relationships safely
            </h2>
          </div>

          <Accordion type="multiple" className="space-y-3">
            <AccordionItem value="access" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Be aware of who has access to your images
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <p>
                  Think about who you've shared intimate or personal photos with.
                  Trust is important, but circumstances change. Only share what
                  you'd be comfortable with if the relationship ended.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warnings" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Recognize warning signs
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <p className="mb-2">Be cautious if someone:</p>
                <ul className="space-y-1">
                  <li>
                    • Pressures you to send photos you're uncomfortable with
                  </li>
                  <li>
                    • Threatens to share images if you don't comply with demands
                  </li>
                  <li>
                    • Takes photos/videos of you without consent or in contexts
                    you didn't agree to
                  </li>
                  <li>
                    • Has a pattern of controlling or coercive behavior
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="delete" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Delete shared content if a relationship ends badly
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <p>
                  If you've shared intimate images with someone and the
                  relationship becomes hostile, you can ask them to delete the
                  content. You can't force deletion, but documenting the request
                  can be useful if they later share images without consent.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Section 5: Monitor */}
        <div className="space-y-8 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Search className="text-primary" size={20} />
              </div>
              Monitor for potential misuse
            </h2>
          </div>

          <Accordion type="multiple" className="space-y-3">
            <AccordionItem value="alerts" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Set up Google Alerts for your name
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Create a Google Alert with your name (and variations) to be
                  notified if you're mentioned online. This won't catch
                  everything but provides some early warning.
                </p>
                <p className="bg-muted p-3 rounded-md">
                  <strong>How:</strong> Visit{" "}
                  <a
                    href="https://www.google.com/alerts"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    google.com/alerts
                  </a>{" "}
                  and enter your name
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="search" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline font-semibold">
                Periodically search for yourself
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <p>
                  Every few months, search your name on Google Images and social
                  media platforms. Look for any unauthorized use of your images
                  or unexpected accounts using your photos.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Remember */}
        <Card className="p-6 mt-12 bg-secondary/5 border-secondary/20">
          <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Shield className="text-secondary" size={20} />
            Remember
          </h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              These steps help reduce risk, but they can't guarantee complete
              protection. AI technology can create content from limited or even
              publicly available images.
            </p>
            <p className="font-medium text-foreground">
              It is never your fault if someone creates non-consensual content
              of you, regardless of what images you've shared or where. The
              responsibility lies entirely with the person who creates or
              distributes the content.
            </p>
          </div>
        </Card>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            If non-consensual content already exists:
          </p>
          <Button asChild>
            <Link to="/toolkit">
              Get help now <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProtectYourself;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, FormEvent } from "react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, you would send this data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Have questions? Want to get involved? We'd love to hear from you.
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this regarding?" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help..." required className="mt-2 min-h-[150px]" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:info@righttodignity.eu" className="text-muted-foreground hover:text-accent transition-colors">
                      info@righttodignity.eu
                    </a>
                  </div>
                </div>
              </Card>

              

              <Card className="p-6 bg-accent">
                <h3 className="font-bold mb-4 text-accent-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary rounded-lg text-primary-foreground hover:bg-primary/90 transition-colors" aria-label="Twitter">
                    <Twitter size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary rounded-lg text-primary-foreground hover:bg-primary/90 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-8">
              There are many ways to support our mission. Whether you're an individual,
              organization, or platform interested in protecting digital dignity, we want
              to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">Volunteer</h3>
                <p className="text-sm text-muted-foreground">
                  Join our team of dedicated volunteers working on advocacy and outreach.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Partner</h3>
                <p className="text-sm text-muted-foreground">
                  Explore partnership opportunities to amplify our collective impact.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">
                  Help fund our advocacy work and support victims of deepfake abuse.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;
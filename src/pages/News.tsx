import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "March 15, 2024",
    title: "EU Parliament Considers Right to Dignity Framework",
    excerpt: "The European Parliament has begun formal discussions on establishing a legally binding right to dignity that would specifically address nonconsensual deepfakes and synthetic media.",
    category: "Legislative Updates"
  },
  {
    id: 2,
    date: "March 8, 2024",
    title: "Major Tech Platforms Commit to Faster Content Removal",
    excerpt: "Following advocacy efforts, several major social media platforms have pledged to implement faster detection and removal systems for nonconsensual deepfakes.",
    category: "Platform Accountability"
  },
  {
    id: 3,
    date: "February 28, 2024",
    title: "New Research Shows Rising Deepfake Threats",
    excerpt: "Recent studies reveal a 300% increase in nonconsensual deepfakes over the past year, highlighting the urgent need for comprehensive legal protections.",
    category: "Research"
  },
  {
    id: 4,
    date: "February 20, 2024",
    title: "Alliance Welcomes New Partner Organizations",
    excerpt: "The Right to Dignity Alliance grows stronger with the addition of five new partner organizations dedicated to digital rights and victim support.",
    category: "Alliance News"
  },
  {
    id: 5,
    date: "February 10, 2024",
    title: "Landmark Case Sets Precedent for Deepfake Accountability",
    excerpt: "A groundbreaking court ruling in Germany establishes that platforms can be held liable for failing to remove nonconsensual deepfakes in a timely manner.",
    category: "Legal Victories"
  },
  {
    id: 6,
    date: "January 30, 2024",
    title: "Public Awareness Campaign Reaches 10 Million People",
    excerpt: "Our educational campaign on deepfake threats and digital dignity rights has successfully reached over 10 million people across the EU.",
    category: "Outreach"
  }
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Stay informed about our advocacy efforts, policy developments, and the fight
            for digital dignity rights across the EU.
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-accent font-medium">{item.category}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-accent-foreground">Stay Updated</h2>
            <p className="text-lg mb-6 text-accent-foreground/90">
              Subscribe to our newsletter to receive the latest news and updates on our
              advocacy efforts directly in your inbox.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

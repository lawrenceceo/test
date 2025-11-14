import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Heart, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About 
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Sea Bridge View Hotel - Mbarara
            </h1>
            <p className="text-lg text-muted-foreground">
              A Legacy of Excellence and Hospitality
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                After our establishment in 2025, Sea Bridge has been synonymous with
                luxury, elegance, and exceptional service. Nestled in the heart of the Mbarara City,
                our hotel has become a landmark destination for discerning travelers seeking
                an unforgettable experience.
              </p>
              <p className="text-lg leading-relaxed">
                Our story began with a vision to create a comfortable environment where guests could escape
                the ordinary and immerse themselves in extraordinary comfort. Over the decades,
                we have refined this vision, combining timeless elegance with modern amenities
                to create a truly unique hospitality experience.
              </p>
              <p className="text-lg leading-relaxed">
                Every detail at Sea Bridge View Hotel - Mbarara reflects our commitment to excellence—from our
                meticulously designed rooms and suites to our world-class dining experiences
                and personalized concierge services. We believe that luxury is not just about
                opulence; it's about creating moments that matter.
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 bg-card border border-border rounded-lg">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Award-Winning Excellence</h3>
              <p className="text-muted-foreground">
                Recognized internationally for our outstanding service and commitment to guest satisfaction.
              </p>
            </div> */}
            <div className="p-6 bg-card border border-border rounded-lg">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Guest-Centric Approach</h3>
              <p className="text-muted-foreground">
                Every decision we make is guided by our dedication to exceeding guest expectations.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Team</h3>
              <p className="text-muted-foreground">
                Our dedicated staff brings years of hospitality expertise and genuine warmth to every interaction.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Continuous Innovation</h3>
              <p className="text-muted-foreground">
                We constantly evolve to incorporate the latest in comfort, technology, and sustainable practices.
              </p>
            </div>
          {/* </div> */}

          <div className="bg-gradient-to-r from-warm-cream to-secondary p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To provide an unparalleled hospitality experience where every guest feels valued,
              pampered, and at home. We strive to create lasting memories through exceptional
              service, elegant surroundings, and genuine care.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

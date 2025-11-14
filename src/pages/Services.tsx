import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Briefcase, Heart, Wifi, Car, Dumbbell, Sparkles, UtensilsCrossed } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Experience culinary excellence at our world-class restaurants featuring international and local cuisine prepared by master chefs.",
    },
    {
      icon: Briefcase,
      title: "Event Facilities",
      description: "Host your corporate events, conferences, or celebrations in our elegant ballrooms and meeting spaces equipped with modern technology.",
    },
    {
      icon: Heart,
      title: "Spa & Wellness",
      description: "Rejuvenate your body and mind at our luxury spa offering therapeutic massages, facials, and wellness treatments.",
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Stay connected with complimentary high-speed Wi-Fi throughout the hotel, perfect for business and leisure travelers.",
    },
    {
      icon: Car,
      title: "Parking Services",
      description: "Enjoy complimentary valet parking.",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Maintain your fitness routine in our state-of-the-art gym featuring the latest equipment and personal training services.",
    },
    {
      icon: Sparkles,
      title: "Reception Services",
      description: "Our dedicated reception team is available 24/7 to assist with reservations, recommendations, and special requests.",
    },
    {
      icon: UtensilsCrossed,
      title: "24/7 Room Service",
      description: "Indulge in delicious meals and beverages delivered to your room at any time, day or night.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the comprehensive range of services designed to make your stay
              exceptional. From dining to wellness, we have everything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-warm-cream to-secondary p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Need Something Special?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              We understand that every guest is unique. If you have specific requirements
              or special requests, our team is here to make it happen.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

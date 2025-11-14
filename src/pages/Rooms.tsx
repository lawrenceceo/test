import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Wind, Coffee } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import deluxeRoom from "@/assets/deluxe-room.jpg";
import executiveSuite from "@/assets/executive-suite.jpg";
import presidentialSuite from "@/assets/presidential-suite.jpg";

const Rooms = () => {
  const rooms = [
    {
      title: "Deluxe Room",
      image: deluxeRoom,
      price: "Ugx 100,000",
      description: "Elegant room with city views, king-size bed, and modern amenities",
      amenities: ["Free Wi-Fi", "Smart TV", "Air Conditioning", "Coffee Maker"],
      // size: "35 m²",
    },
    {
      title: "Executive Suite",
      image: executiveSuite,
      price: "Ugx 100,000",
      description: "Spacious suite with separate living area and premium furnishings",
      amenities: ["Free Wi-Fi", "Smart TV", "Air Conditioning", "Coffee Maker", "Mini Bar"],
      // size: "65 m²",
    },
    {
      title: "Standard Room",
      image: presidentialSuite,
      price: "Ugx 100,000",
      description: "Ultimate luxury with panoramic views, grand piano, and exclusive services",
      amenities: ["Free Wi-Fi", "Smart TV", "Air Conditioning", "Coffee Maker", "Butler Service"],
      // size: "120 m²",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Rooms & Suites
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of beautifully appointed rooms and suites,
              each designed to provide the ultimate comfort and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                    {room.price}<span className="text-sm">/night</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{room.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {/* {room.size} */}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm text-foreground">Amenities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <a
                      href={`/contact?subject=Inquiry%20about%20${encodeURIComponent(room.title)}`}
                      // className="ml-2 text-sm font-medium underline"
                    >
                      Inquire Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;

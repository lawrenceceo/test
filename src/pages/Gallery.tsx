import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hotel-hero.jpg";
import deluxeRoom from "@/assets/deluxe-room.jpg";
import executiveSuite from "@/assets/executive-suite.jpg";
import presidentialSuite from "@/assets/presidential-suite.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, title: "Hotel Exterior", category: "Exterior" },
    { src: deluxeRoom, title: "Deluxe Room", category: "Rooms" },
    { src: executiveSuite, title: "Executive Suite", category: "Suites" },
    { src: presidentialSuite, title: "Presidential Suite", category: "Suites" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the elegance and luxury that awaits you at Sea Bridge View Hotel - Mbarara.
              From stunning architecture to beautifully appointed rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border hover:shadow-xl transition-all cursor-pointer aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-primary font-semibold mb-1">
                      {image.category}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Want to see more? Visit us and experience the luxury in person.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

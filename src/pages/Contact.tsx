import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qg6mx96", "template_z0gpvwp", form.current, {
        publicKey: "wqDtWctCA5Ox7KL0T",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for inquiries, reservations, or any
              questions. We're here to help make your stay unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        Mbarara City
                        <br />
                        Uganda
                        <br />
                        Uganda
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">
                        Main: +256 790448115
                        <br />
                        Reservations: +256 790448115
                        <br />
                        Report: +256 790448115
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        General: sbvhotel@gmail.com
                        <br />
                        Reservations: sbvhotel@gmail.com
                        <br />
                        Events: sbvhotel@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">
                        Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Front Desk: 24/7
                        <br />
                        Dining: 6:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="border-border">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Make a Reservation or Inquiry
                </h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Fullname"
                        required
                        className="border-border"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="customer@email.com"
                        required
                        className="border-border"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(+256) 790448115"
                        required
                        className="border-border"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your inquiry"
                        required
                        className="border-border"
                        rows={6}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="mt-4 bg-primary hover:bg-primary/90"
                    >
                      <input type="submit" value="Send" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

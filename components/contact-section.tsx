"use client";

import React from "react";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@aetherizelabs.com",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "United States",
  },
  {
    icon: Globe,
    label: "Operating domain",
    value: "Earth → Orbit",
  },
];

export function ContactSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" ref={containerRef} className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="section-rule mb-16 h-px w-full" />

        <div className="grid gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow text-primary">Get in touch</span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Build the impossible with us.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Researchers, engineers, operators, and investors — if you want to
              put intelligence into motion, we want to hear from you.
            </p>

            <div className="mt-10 space-y-3">
              {details.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/30 px-5 py-4"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="eyebrow text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-sm text-foreground">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-3xl border border-border p-8">
              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center py-16 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Message sent
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Thanks for reaching out. We&apos;ll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="h-11 rounded-xl border-border bg-background/50 focus-visible:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="h-11 rounded-xl border-border bg-background/50 focus-visible:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      required
                      className="h-11 rounded-xl border-border bg-background/50 focus-visible:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      required
                      className="resize-none rounded-xl border-border bg-background/50 focus-visible:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full rounded-full bg-primary text-base text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.span
                        className="h-5 w-5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ) : (
                      <>
                        Send message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

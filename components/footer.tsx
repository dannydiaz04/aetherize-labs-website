"use client";

import { motion } from "framer-motion";
import { AetherizeLogo } from "./aetherize-logo";
import { Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  programs: [
    { name: "Robotics & Embodied AI", href: "#capabilities" },
    { name: "Aerospace Launch Operations", href: "#capabilities" },
    { name: "Ignition Analytics AI", href: "#capabilities" },
    { name: "Phone Eats First AI", href: "https://phoneeatsfirst.ai", external: true },
  ],
  company: [
    { name: "Mission", href: "#mission" },
    { name: "Technology", href: "#technology" },
    { name: "Careers", href: "#contact" },
    { name: "Contact", href: "#contact" },
  ],
  products: [
    {
      name: "Phone Eats First (iOS)",
      href: "https://apps.apple.com/us/app/phone-eats-first-ai/id6747300501",
      external: true,
    },
    { name: "phoneeatsfirst.ai", href: "https://phoneeatsfirst.ai", external: true },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="eyebrow text-muted-foreground/70">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <AetherizeLogo />
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              Building embodied intelligence for the physical world — from the
              factory floor to the launch pad.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  whileHover={{ y: -2 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <LinkColumn title="Programs" links={footerLinks.programs} />
          <LinkColumn title="Company" links={footerLinks.company} />
          <LinkColumn title="Products" links={footerLinks.products} />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aetherize Labs LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>

        <p className="eyebrow mt-12 text-center text-muted-foreground/40">
          Intelligence, embodied.
        </p>
      </div>
    </footer>
  );
}

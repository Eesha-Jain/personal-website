import type { JSX, ReactNode } from "react";
import { AnimatedSection, GitHubIcon, LinkedInIcon, TwitterIcon, EmailIcon } from "../components";

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  label: string;
  icon: ReactNode;
}

// TODO: Replace with your actual social links
const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    platform: "GitHub",
    url: "https://github.com/Eesha-Jain",
    label: "Check out my code",
    icon: <GitHubIcon size={24} />,
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/eesha-jain",
    label: "Let's connect",
    icon: <LinkedInIcon size={24} />,
  },
  {
    id: "email",
    platform: "Email",
    url: "mailto:eeshaaj@cs.washington.edu",
    label: "Get in touch",
    icon: <EmailIcon size={24} />,
  },
];

export function Socials(): JSX.Element {
  return (
    <AnimatedSection id="socials" className="section-container snap-section">
      <div className="section-content">
        <div className="section-title">
          <h2>let&apos;s connect</h2>
        </div>
        <p className="section-text-sm mb-8">
          I love connecting with curious, ambitious, and thoughtful people. 
          Whether it's sharing ideas, exchanging perspectives, or exploring ways 
          to collaborate, I'd love to start a conversation and hear what you're working on.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 stagger-item"
              style={{ opacity: 0 }}
              aria-label={social.label}
            >
              <div className="social-icon">{social.icon}</div>
              <span className="text-sm text-muted group-hover:text-primary transition-colors">
                {social.platform}
              </span>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

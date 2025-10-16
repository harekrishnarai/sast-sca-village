import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CFP_FORM_URL } from "@/lib/links";


export default function CFP() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-secondary/10 relative overflow-hidden">
      {/* Decorative blurred orbs */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
      <Navigation />
      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent drop-shadow-lg mb-4">
            Call for Papers 2026
          </h1>
        </header>

        {/* Submission Card */}
  <section className="py-8 flex flex-col items-center">
          {/* Condensed CFP Intro */}
          <div className="text-lg text-muted-foreground w-full mb-8 text-center">
            <p>
              Seeking <span className="text-accent font-semibold">arsenal releases</span>, <span className="text-accent font-semibold">research</span>, and <span className="text-accent font-semibold">practical talks</span> on SAST, SCA, CI/CD Security, SSDLC, Product & Supply Chain Security. Vendor-neutral, hands-on, and tool-focused sessions welcome.
            </p>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
            </svg>
            <h2 className="text-2xl font-bold">Submit Your Proposal</h2>
          </div>
          <p className="text-base text-muted-foreground mb-6 text-center max-w-lg">
            CFP is open! Submit via Google Form below. You can edit your response later. All formats and experience levels welcome.
          </p>
          <a
            href={CFP_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-accent text-white px-8 py-4 font-semibold text-lg shadow-lg hover:scale-105 hover:bg-accent/90 transition-all"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Open CFP Form
          </a>

          {/* Topics & Formats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-background/70 rounded-xl p-5 border border-border/30 shadow-sm">
              <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" /></svg>
                Topics We Love
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Modern code analysis workflows</li>
                <li>Semgrep rule-writing</li>
                <li>SBOM pipelines</li>
                <li>OSS supply chain risks</li>
                <li>CI/CD hardening</li>
                <li>Policy as code</li>
                <li>Developer enablement</li>
              </ul>
            </div>
            <div className="bg-background/70 rounded-xl p-5 border border-border/30 shadow-sm">
              <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Formats & Benefits
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>25–30 min talks</li>
                <li>10–15 min lightning talks</li>
                <li>Hands-on demos with repos</li>
                <li>Community spotlight</li>
                <li>Swag for speakers</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      {/* Extra creative accent: animated floating icon */}
      <div className="absolute left-8 bottom-24 animate-bounce-slow">
        <svg className="w-16 h-16 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h4v4" />
        </svg>
      </div>
      <Footer />
    </div>
  );
}

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CFP_FORM_URL } from "@/lib/links";

export default function CFP() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Call for Papers</h1>
          <p className="text-muted-foreground mt-3">
            Were seeking practical, vendor-neutral talks and hands-on demos in SAST, SCA, supply chain security, and platform security.
          </p>
        </header>

        <section className="rounded-lg border border-border/60 bg-card/40 p-6">
          <h2 className="text-xl font-semibold mb-2">Submit your proposal</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Our CFP is open now. Submit via Google Form using the button below. You can edit your response later via Google.
          </p>
          <a
            href={CFP_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent text-white px-6 py-3 font-medium hover:bg-accent/90"
          >
            Open CFP Form
          </a>

          <div className="mt-6 text-sm text-muted-foreground space-y-2">
            <p>
              Suggested topics: modern code analysis workflows, Semgrep rule-writing, SBOM pipelines, OSS supply chain risks, CI/CD hardening, policy as code, and developer enablement.
            </p>
            <p>
              Formats: 25–30 min talks, 10–15 min lightning talks, or hands-on demos with reproducible repos.
            </p>
            <p>
              Speaker benefits: community spotlight, recording, and swag. Travel support is limited and evaluated case-by-case.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

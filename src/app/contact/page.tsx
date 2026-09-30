import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Smiles Dental Care at 100 W El Camino Real Suite 63A, Mountain View, CA 94040. Call (650) 563-1180.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Contact Us"
          lede="Book today, get directions, or send a note - we are here for Mountain View and nearby Peninsula communities."
          // Focal: office / team atmosphere on the right
          image={{
            src: "/images/hero-office.jpg",
            alt: "Smiles Dental Care office tour photo",
            focal: "72% 45%",
          }}
          actions={
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-11 rounded-md bg-bronze px-5 text-sm font-semibold text-ink hover:bg-bronze/90"
            >
              Call {site.phone}
            </Button>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
                Visit the office
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
                Mountain View, CA
              </h2>
              <address className="mt-5 not-italic text-base leading-relaxed text-foreground/80">
                {site.address.street}, {site.address.suite}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
              <p className="mt-4">
                <a
                  href={site.phoneHref}
                  className="text-lg font-semibold text-teal hover:underline"
                >
                  {site.phone}
                </a>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  render={
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="h-11 rounded-md bg-teal px-5 font-semibold text-white hover:bg-teal/90"
                >
                  Get directions
                </Button>
                <Button
                  render={<a href={site.phoneHref} />}
                  variant="outline"
                  className="h-11 rounded-md border-border bg-card px-5 font-semibold text-ink hover:bg-muted"
                >
                  Book today
                </Button>
              </div>

              <div className="mt-10">
                <h3 className="font-display text-xl text-ink">Office hours</h3>
                <ul className="mt-4 space-y-2">
                  {site.hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex justify-between gap-4 border-b border-border/60 py-2 text-sm"
                    >
                      <span className="font-medium text-ink">{row.day}</span>
                      <span className="text-foreground/70">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-xl text-ink">Follow along</h3>
                <SocialLinks className="mt-3 text-ink" />
              </div>
            </div>

            <div className="rounded-md border border-border/70 bg-card p-6 md:p-8">
              <h2 className="font-display text-2xl tracking-tight text-ink">
                Request an appointment
              </h2>
              <p className="mt-2 text-sm text-foreground/70">
                Send a short message and we will follow up. For urgent pain, call
                the office directly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-md border border-border/70">
            <iframe
              title="Map to Smiles Dental Care"
              src={site.mapsEmbed}
              className="h-72 w-full md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

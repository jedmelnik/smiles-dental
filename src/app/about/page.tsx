import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { doctors, mission, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About & Meet the Doctors",
  description:
    "Meet the Smiles Dental Care doctors in Mountain View - Dr. Hall, Dr. Erdogan, Dr. Yasini, and orthodontist Dr. Van den Berg.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Meet the Doctors"
          lede="We are committed to quality healthcare for individuals and families in the Mountain View area - patients of all ages are welcome."
          // Focal: clinician / patient faces in the about banner
          image={{
            src: "/images/hero-about.jpg",
            alt: "Smiles Dental Care team caring for patients",
            focal: "72% 35%",
          }}
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
              Our mission
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              What guides every visit
            </h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {mission.statement.map((item) => (
              <li key={item.title} className="border-t-2 border-bronze pt-4">
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75 md:text-base">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-2xl">
            <h3 className="font-display text-2xl text-ink">Our core values</h3>
            <ul className="mt-4 space-y-2">
              {mission.values.map((value) => (
                <li
                  key={value}
                  className="border-l-2 border-teal/40 pl-3 text-base text-foreground/80"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/60 py-14 md:py-20">
          <div className="site-wrap space-y-16">
            {doctors.map((doctor, index) => (
              <article
                key={doctor.name}
                className={`grid items-start gap-8 lg:grid-cols-[240px_1fr] ${
                  index % 2 === 1 ? "lg:grid-cols-[1fr_240px]" : ""
                }`}
              >
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-md bg-muted ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    sizes="240px"
                    className="object-cover object-top"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal/70">
                    {doctor.role}
                  </p>
                  <h2 className="mt-2 font-display text-3xl tracking-tight text-ink">
                    {doctor.name}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/80">
                    {doctor.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                  {doctor.memberships.length > 0 ? (
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                        Professional memberships
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {doctor.memberships.map((item) => (
                          <li
                            key={item}
                            className="rounded-md bg-muted px-3 py-1.5 text-sm text-foreground/80"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="site-wrap py-14 md:py-16">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/75">
            Visit us at {site.address.full}. Call{" "}
            <a href={site.phoneHref} className="font-semibold text-teal">
              {site.phone}
            </a>{" "}
            to book your appointment today.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

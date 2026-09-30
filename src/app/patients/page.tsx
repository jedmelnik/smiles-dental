import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  insuranceProviders,
  membershipPlan,
  newPatientSpecial,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Information",
  description:
    "New patient special, membership plan, insurance, and first-visit info for Smiles Dental Care in Mountain View, CA.",
};

export default function PatientsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Patient Information"
          lede="Everything you need for your first visit - offers for new patients, our membership plan, and the insurance plans we accept."
          // Focal: smile / product graphic center-right
          image={{
            src: "/images/hero-patients.jpg",
            alt: "New patient special at Smiles Dental Care",
            focal: "65% 40%",
          }}
          actions={
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="h-11 rounded-md bg-bronze px-5 text-sm font-semibold text-ink hover:bg-bronze/90"
            >
              Book your visit
            </Button>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
                For our new patients
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                {newPatientSpecial.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                {newPatientSpecial.offer}
              </p>
              <p className="mt-3 text-sm text-foreground/65">
                {newPatientSpecial.finePrint}
              </p>
              <Button
                render={<a href={site.phoneHref} />}
                className="mt-6 h-11 rounded-md bg-teal px-5 font-semibold text-white hover:bg-teal/90"
              >
                Call {site.phone}
              </Button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src="/images/hero-patients.jpg"
                alt="Complimentary Sonicare or whitening kit offer"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/60 py-14 md:py-20">
          <div className="site-wrap">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
                No insurance? No problem
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Smiles Membership Plan
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
                {membershipPlan.summary}
              </p>
              <p className="mt-6 font-display text-4xl text-ink">
                {membershipPlan.premium}{" "}
                <span className="text-lg font-body text-foreground/60">
                  per person per year
                </span>
              </p>
              <p className="mt-1 text-sm text-foreground/60">
                A {membershipPlan.value} value
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl text-ink">Plan highlights</h3>
                <ul className="mt-4 space-y-2">
                  {membershipPlan.highlights.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-bronze pl-3 text-sm text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl text-ink">Included each year</h3>
                <ul className="mt-4 space-y-2">
                  {membershipPlan.included.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-teal/50 pl-3 text-sm text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-display text-xl text-ink">
                Member treatment discounts
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {membershipPlan.discounts.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-md bg-background/80 px-4 py-3 text-sm"
                  >
                    <span className="font-semibold text-ink">{item.value}</span>
                    <span className="mt-1 block text-foreground/70">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-foreground/65">
                {membershipPlan.note}
              </p>
            </div>
          </div>
        </section>

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
                Insurance
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
                We accept dental insurance
              </h2>
              <p className="mt-4 text-base text-foreground/75">
                Bring your benefits - we work with major dental plans. Call us if
                you do not see yours listed and we will check coverage with you.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {insuranceProviders.map((name) => (
                  <li
                    key={name}
                    className="rounded-md border border-border/70 bg-card px-4 py-3 text-sm font-medium text-ink"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
                Financing
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
                CareCredit options
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                CareCredit is a credit card for health and beauty needs that can
                make dental treatment more manageable with promotional financing
                options (subject to credit approval; minimum monthly payments
                required). Ask our team about current offers when you visit.
              </p>
              <Button
                render={<a href={site.phoneHref} />}
                variant="outline"
                className="mt-6 h-11 rounded-md border-border bg-card px-5 font-semibold text-ink hover:bg-muted"
              >
                Ask about financing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

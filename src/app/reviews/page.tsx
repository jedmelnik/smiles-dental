import type { Metadata } from "next";
import {
  siFacebook,
  siGoogle,
  siYelp,
  type SimpleIcon,
} from "simple-icons";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialLinks } from "@/components/social-links";
import { reviewDestinations, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read Smiles Dental Care patient reviews on Google, Yelp, and Facebook - Mountain View, CA dentist.",
};

const icons: Record<string, SimpleIcon> = {
  google: siGoogle,
  yelp: siYelp,
  facebook: siFacebook,
};

export default function ReviewsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Patient Reviews"
          lede="Happy patients stay with us and refer others - that is our mission. See what the community says on Google, Yelp, and Facebook."
          // Focal: smiling subject on the right
          image={{
            src: "/images/hero-reviews.jpg",
            alt: "Patient with a bright, confident smile",
            focal: "68% 35%",
          }}
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
              Share your smile
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Find us on the networks you trust
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
              The live Smiles Dental Care site loads reviews from Google and
              partner widgets. We link you straight to those profiles so you can
              read full, current feedback.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {reviewDestinations.map((dest) => {
              const icon = icons[dest.network];
              return (
                <li key={dest.network}>
                  <a
                    href={dest.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-md border border-border/70 bg-card px-5 py-6 transition-colors hover:border-teal/40"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-muted text-ink">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="size-5"
                        fill="currentColor"
                      >
                        <path d={icon.path} />
                      </svg>
                    </span>
                    <h3 className="mt-4 font-display text-xl text-ink group-hover:text-teal">
                      {dest.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
                      {dest.summary}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-teal">
                      Open reviews →
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 flex flex-col gap-4 rounded-md bg-secondary px-6 py-8 text-secondary-foreground md:flex-row md:items-center md:justify-between md:px-10">
            <div>
              <h3 className="font-display text-2xl text-white">
                Already a patient?
              </h3>
              <p className="mt-2 text-white/75">
                We would love to hear about your visit. Leave a review or follow
                along for updates.
              </p>
              <SocialLinks className="mt-4 text-white/85" />
            </div>
            <Button
              render={<a href={site.phoneHref} />}
              className="h-11 shrink-0 rounded-md bg-bronze px-5 font-semibold text-ink hover:bg-bronze/90"
            >
              Call {site.phone}
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

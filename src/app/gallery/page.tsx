import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { galleryPairs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "Before-and-after smile gallery from Smiles Dental Care in Mountain View, California.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Smile Gallery"
          lede="Real transformations from restorative and cosmetic care - see what a healthier, brighter smile can look like."
          // Focal: smile subject on the right of the gallery header
          image={{
            src: "/images/hero-gallery.jpg",
            alt: "Smile gallery header photo from Smiles Dental Care",
            focal: "70% 40%",
          }}
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
              Before & after
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Results that speak for themselves
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Photos are from the Smiles Dental Care smile gallery. Individual
              results vary - book a consultation to talk about your goals.
            </p>
          </div>

          <ul className="mt-12 space-y-12">
            {galleryPairs.map((pair) => (
              <li key={pair.id}>
                <div className="grid gap-4 md:grid-cols-2">
                  <figure className="relative aspect-[16/10] overflow-hidden rounded-md bg-muted">
                    <Image
                      src={pair.before}
                      alt={`${pair.alt} - before`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded-md bg-ink/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Before
                    </figcaption>
                  </figure>
                  <figure className="relative aspect-[16/10] overflow-hidden rounded-md bg-muted">
                    <Image
                      src={pair.after}
                      alt={`${pair.alt} - after`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded-md bg-teal/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      After
                    </figcaption>
                  </figure>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap gap-3">
            <Button
              render={<Link href="/contact" />}
              className="h-11 rounded-md bg-teal px-5 font-semibold text-white hover:bg-teal/90"
            >
              Start your smile plan
            </Button>
            <Button
              render={<a href={site.phoneHref} />}
              variant="outline"
              className="h-11 rounded-md border-border bg-card px-5 font-semibold text-ink hover:bg-muted"
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

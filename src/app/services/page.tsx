import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { serviceCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Routine care, cosmetic dentistry, implants, dentures, Invisalign, whitening, and emergency dentistry at Smiles Dental Care in Mountain View, CA.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Dental Services"
          lede="A wide range of procedures for patients throughout the Mountain View area - preventive, restorative, and cosmetic care in one comfortable office."
          // Focal: colorful toothbrushes cluster on the right
          image={{
            src: "/images/hero-services.jpg",
            alt: "Toothbrushes representing everyday oral health habits",
            focal: "70% 45%",
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
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
              Mountain View, CA
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              What we offer
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
              Smiles Dental Care provides a wide variety of dental services and
              procedures to address our patients&apos; oral health needs. By
              combining quality patient care with up-to-date technology, we treat
              patients of all ages in a comfortable and relaxing setting.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {serviceCategories.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={service.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="size-10"
                    />
                    <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75">
                    {service.summary}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-bronze/70 pl-3 text-sm text-foreground/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-md bg-secondary px-6 py-8 text-secondary-foreground md:px-10">
            <h3 className="font-display text-2xl text-white">
              Not sure where to start?
            </h3>
            <p className="mt-3 max-w-2xl text-white/75">
              Call our Mountain View office and we will help you find the right
              visit - cleaning, consultation, or emergency care.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                render={<a href={site.phoneHref} />}
                className="h-11 rounded-md bg-bronze px-5 font-semibold text-ink hover:bg-bronze/90"
              >
                Call {site.phone}
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                className="h-11 rounded-md border-white/30 bg-transparent px-5 font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                Contact us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

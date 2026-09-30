import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  doctors,
  mission,
  newPatientSpecial,
  serviceCategories,
  site,
} from "@/lib/site";

export default function HomePage() {
  const featuredServices = serviceCategories.slice(0, 4);

  return (
    <>
      <SiteHeader />
      <main id="top" className="flex flex-1 flex-col">
        <PageHero
          size="home"
          kicker="Mountain View · California"
          title={
            <>
              Smiles Dental
              <br />
              Care
            </>
          }
          lede="Quality oral health in a comfortable setting - preventive care, cosmetic dentistry, implants, and Invisalign for the whole family."
          ledeOnMobile
          // Focal: patient / clinician interaction on the right of the treatment photo
          image={{
            src: "/images/hero-home.jpg",
            alt: "Patient visit at Smiles Dental Care in Mountain View",
            focal: "78% 40%",
          }}
          actions={
            <>
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 rounded-md bg-bronze px-5 text-sm font-semibold text-ink shadow-none transition-transform hover:bg-bronze/90 hover:scale-[1.02] active:scale-[0.99] md:h-12 md:px-6 md:text-base"
              >
                Call {site.phone}
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                size="lg"
                className="hidden h-11 rounded-md border-white/40 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white md:inline-flex md:h-12 md:px-6 md:text-base"
              >
                Request appointment
              </Button>
            </>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="max-w-3xl animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
              Our mission
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Happy. Healthy. Educated.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
              At Smiles Dental Care we create a calm environment so patients can
              relax while receiving the professional care they need - and leave
              knowing how to keep their smile strong.
            </p>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {mission.statement.map((item) => (
              <li
                key={item.title}
                className="animate-rise border-l-2 border-bronze pl-4"
              >
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75 md:text-base">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-border/70 bg-card/60 py-14 md:py-20">
          <div className="site-wrap">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
                Services
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Care for every smile
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                From routine cleanings to smile makeovers, William S. Hall D.D.S.
                and our team treat patients of all ages with up-to-date
                technology.
              </p>
            </div>

            <div className="mt-8 md:hidden">
              <Link
                href="/services"
                className="group relative block overflow-hidden rounded-lg"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/hero-services.jpg"
                    alt="Colorful toothbrushes representing everyday oral care"
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: "50% 40%" }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl text-white">
                    View all services
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Routine · Cosmetic · Implants · Invisalign
                  </p>
                </div>
              </Link>
            </div>

            <ul className="mt-10 hidden divide-y divide-border md:block">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="group grid gap-6 py-8 md:grid-cols-[1fr_1.4fr] md:items-center lg:grid-cols-[240px_1fr]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="240px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-teal lg:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/75">
                        {service.summary}
                      </p>
                      <span className="mt-4 inline-block text-sm font-semibold text-teal">
                        Learn more →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="site-wrap py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
                New patients
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                {newPatientSpecial.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
                {newPatientSpecial.offer}
              </p>
              <p className="mt-3 text-sm text-foreground/65">
                {newPatientSpecial.finePrint}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  render={<Link href="/patients" />}
                  className="h-11 rounded-md bg-teal px-5 font-semibold text-white hover:bg-teal/90"
                >
                  Patient info & offers
                </Button>
                <Button
                  render={<Link href="/about" />}
                  variant="outline"
                  className="h-11 rounded-md border-border bg-card px-5 font-semibold text-ink hover:bg-muted"
                >
                  Meet the doctors
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/hero-patients.jpg"
                alt="New patient special graphic from Smiles Dental Care"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "50% 40%" }}
              />
            </div>
          </div>
        </section>

        <section className="border-t border-border/70 bg-card/50 py-14 md:py-20">
          <div className="site-wrap">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal/70">
                  Meet the doctors
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                  A team that listens
                </h2>
              </div>
              <Link
                href="/about"
                className="text-sm font-semibold text-teal hover:underline"
              >
                View full bios →
              </Link>
            </div>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {doctors.map((doctor) => (
                <li key={doctor.name} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 20vw, 45vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-ink">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/65">{doctor.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

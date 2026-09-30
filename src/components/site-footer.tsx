import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { navLinks, site } from "@/lib/site";

/** Combined appointment CTA + site footer - one teal closing band sitewide. */
export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-secondary text-secondary-foreground">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,146,74,0.22),transparent_50%)]"
        aria-hidden
      />

      <div className="relative site-wrap">
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 md:flex-row md:items-end md:justify-between md:py-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Book today
            </p>
            <p className="mt-3 font-display text-3xl tracking-tight text-white md:text-4xl">
              Ready for a healthier, brighter smile?
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              Call Smiles Dental Care in Mountain View or request an appointment
              online. We welcome new patients from {site.serviceArea}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="/contact" />}
              size="lg"
              className="h-12 rounded-md bg-bronze px-6 text-base font-semibold text-ink hover:bg-bronze/90"
            >
              Request appointment
            </Button>
            <Button
              render={<a href={site.phoneHref} />}
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              Call {site.phone}
            </Button>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-mark-stacked.png"
              alt={site.name}
              width={380}
              height={168}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Family and cosmetic dentistry in Mountain View - comfortable care,
              modern techniques, and a team that puts patients first.
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-bronze" aria-hidden />
              <address className="not-italic">
                {site.address.street}, {site.address.suite}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="text-sm font-medium text-white/85 hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <SocialLinks className="text-white/80" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-xs leading-relaxed text-white/45">
          <p>
            Hours listed on this site come from the live Smiles Dental Care
            contact page. Call ahead if you need same-day or emergency care.
          </p>
          <p className="mt-3">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

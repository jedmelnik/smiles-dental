"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type Status = "idle" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [summary, setSummary] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !message || (!phone && !email)) {
      setStatus("error");
      return;
    }

    setSummary(
      [
        `Name: ${name}`,
        phone ? `Phone: ${phone}` : null,
        email ? `Email: ${email}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="space-y-4" role="status">
        <p className="text-base font-medium text-ink">
          Thanks - please call {site.phone} to finish booking. You can share the
          details below when we answer.
        </p>
        <pre className="overflow-x-auto rounded-md bg-muted px-4 py-3 text-sm whitespace-pre-wrap text-foreground/80">
          {summary}
        </pre>
        <Button
          render={<a href={site.phoneHref} />}
          size="lg"
          className="h-12 rounded-md bg-teal px-6 text-base font-semibold text-white hover:bg-teal/90"
        >
          Call {site.phone}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-11 bg-card"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={site.phone}
            className="h-11 bg-card"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="h-11 bg-card"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="New patient visit, cleaning, emergency, Invisalign..."
          className="bg-card"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Please share your name, a message, and a phone number or email.
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="h-12 w-full rounded-md bg-teal px-6 text-base font-semibold text-white hover:bg-teal/90 sm:w-auto"
      >
        Request an appointment
      </Button>
    </form>
  );
}

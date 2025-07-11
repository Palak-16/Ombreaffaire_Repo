import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | OMBRÉ affaire",
  description: "Learn about OMBRÉ affaire's story, mission, and values.",
};

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">
          About OMBRÉ affaire
        </h1>

        <div className="mb-12 aspect-video overflow-hidden rounded-lg">
          <Image
            src="/about2.jpg"
            alt="OMBRÉ affaire atelier"
            width={1200}
            height={675}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
            <p className="text-muted-foreground">
              Ombré Affaire began with a simple vision — to create a brand that
              celebrates individuality, comfort, and confidence. What started as
              a passion project quickly evolved into a heartfelt affair with
              fashion. Every curation is a step forward in our journey — shaped
              by creativity, connection, and the evolving spirit of a woman who
              is unapologetically herself.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Our Philosophy</h2>
            <p className="text-muted-foreground">
              We believe fashion should empower, not overwhelm. Our philosophy
              is rooted in balance — between style and simplicity, trends and
              timelessness, self-expression and subtlety. We curate with care,
              always putting thought into how each piece will make you feel when
              you wear it. To us, clothing is a language — and every collection
              tells a story worth wearing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              Sustainability Commitment
            </h2>
            <p className="text-muted-foreground">
              While we’re still in our early chapters, we’re consciously
              choosing mindful practices. From prioritizing mindful curation, to
              thoughtful packaging choices, we’re learning and improving every
              day. We believe sustainability is a journey, and we're committed
              to growing responsibly — one conscious choice at a time.{" "}
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Our Team</h2>
              <p className="text-muted-foreground">
                At Ombré Affaire, every team member brings a unique spark — and
                wears multiple hats with pride. From curating collections to
                engaging with our community and managing daily operations, we do
                it all with passion and purpose. Our strength lies in our
                versatility, creativity, and deep love for what we do. Together,
                we’re building more than a brand — we’re creating a space where
                fashion feels personal, joyful, and ever-evolving
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Our Future</h2>
              <p className="text-muted-foreground">
                As we grow, our dream is to create a brand that feels like home
                — where every woman can find a piece of herself in our
                collections. We’re excited to explore new styles, build deeper
                community connections, and keep elevating your experience with
                us. The journey is just getting started, and we’re so glad
                you’re here for it.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

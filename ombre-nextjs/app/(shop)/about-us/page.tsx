import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | OMBRÉ affaire",
  description: "Learn about OMBRÉ affaire's story, mission, and values.",
}

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">About OMBRÉ affaire</h1>

        <div className="mb-12 aspect-video overflow-hidden rounded-lg">
          <Image
            src="/beige-atelier.png"
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
              Founded in 2018, OMBRÉ affaire began as a small atelier in Paris with a vision to create elegant,
              contemporary fashion that transitions seamlessly from day to night, just like the gradual blend of colors
              in an ombré design. Our founder, inspired by the fluid nature of modern life, sought to create pieces that
              would accompany the wearer through all of life's moments.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Our Philosophy</h2>
            <p className="text-muted-foreground">
              At OMBRÉ affaire, we believe in the power of subtle elegance. Our designs embrace the concept of
              transition and transformation, creating pieces that are versatile, timeless, and sophisticated. We focus
              on quality materials, expert craftsmanship, and thoughtful design to create clothing that becomes an
              extension of the wearer's identity.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Sustainability Commitment</h2>
            <p className="text-muted-foreground">
              We are committed to responsible fashion practices. From sourcing sustainable materials to ensuring ethical
              working conditions in our production facilities, we strive to minimize our environmental footprint while
              maximizing our positive social impact. Each OMBRÉ affaire piece is created with respect for both people
              and planet.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Our Team</h2>
              <p className="text-muted-foreground">
                Our diverse team of designers, artisans, and fashion professionals brings together expertise from around
                the world. United by a passion for beautiful, functional design, our team works collaboratively to bring
                the OMBRÉ affaire vision to life in every collection.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Our Future</h2>
              <p className="text-muted-foreground">
                As we continue to grow, we remain dedicated to our founding principles while embracing innovation. We're
                excited to expand our offerings, reach new markets, and continue creating fashion that empowers and
                inspires.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

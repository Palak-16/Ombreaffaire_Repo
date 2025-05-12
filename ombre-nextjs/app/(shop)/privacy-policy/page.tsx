import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | OMBRÉ affaire",
  description: "OMBRÉ affaire's privacy policy and data protection practices.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Privacy Policy</h1>

        <div className="mb-8">
          <p className="text-muted-foreground">Last Updated: April 30, 2023</p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>
            At OMBRÉ affaire, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website or make a purchase.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you register for an account, make a purchase,
            sign up for our newsletter, contact customer service, or interact with our website.
          </p>
          <p>This information may include:</p>
          <ul>
            <li>Personal information (name, email address, postal address, phone number)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Account information (username, password)</li>
            <li>Order history and preferences</li>
            <li>Communications with our customer service team</li>
          </ul>

          <p>We also automatically collect certain information when you visit our website, including:</p>
          <ul>
            <li>IP address and device information</li>
            <li>Browser type and settings</li>
            <li>Referring website</li>
            <li>Pages viewed and actions taken on our website</li>
            <li>Date and time of your visit</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders, account, and our products</li>
            <li>Provide customer service</li>
            <li>Send you marketing communications (if you've opted in)</li>
            <li>Improve our website and products</li>
            <li>Detect and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who perform services on our behalf (payment processors, shipping companies)</li>
            <li>Professional advisors (lawyers, accountants, insurers)</li>
            <li>Government authorities when required by law</li>
            <li>Potential buyers in the event of a business transaction (merger, acquisition)</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>

          <p>To exercise these rights, please contact us using the information provided at the end of this policy.</p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect information about your browsing activities. You
            can manage your cookie preferences through your browser settings.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information.
            However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2>International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence,
            which may have different data protection laws.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under 16 years of age, and we do not knowingly collect personal
            information from children.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
            "Last Updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>
            Email: privacy@ombreaffaire.com
            <br />
            Phone: +1 (800) 555-OMBRE
            <br />
            Address: 123 Fashion Avenue, New York, NY 10001
          </p>
        </div>
      </div>
    </div>
  )
}

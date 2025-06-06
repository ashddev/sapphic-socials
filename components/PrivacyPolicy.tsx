import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("w-full flex flex-col", className)} {...props}>
      <Card className="pt-0">
        <Button variant="link" className="text-muted-foreground pt-6 w-fit">
          <Link href={"/"} className="flex items-center gap-1">
            <ArrowLeft />
            Return to Sign-Up
          </Link>
        </Button>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Privacy Policy</CardTitle>
          <CardDescription>Last updated: 06/06/2024</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            At Sapphic Socials, we respect your privacy and are committed to
            protecting your personal data. This Privacy Policy explains how we
            collect, use, and store your data when you sign up to our mailing
            list.
          </p>

          <h3 className="font-semibold">1. Who We Are</h3>
          <p>
            Sapphic Socials is a UK-based organisation that runs inclusive
            events for women (trans inclusive 🏳️‍⚧️) and non-binary people who love
            women. Our mailing list is used to share updates about upcoming
            events, community news, and related information.
          </p>

          <h3 className="font-semibold">2. What Data We Collect</h3>
          <p>
            When you subscribe to our mailing list, we collect the following
            personal data:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Your email address</li>
          </ul>
          <p>We do not collect or store sensitive personal data.</p>

          <h3 className="font-semibold">3. How We Use Your Data</h3>
          <p>We use your data to:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Send you emails about upcoming events and community updates</li>
            <li>
              Inform you of any changes or important information regarding our
              services
            </li>
            <li>
              Improve our communications and engagement based on aggregate
              trends
            </li>
          </ul>
          <p>
            We will <strong>never sell or share your data</strong> with third
            parties for marketing purposes.
          </p>

          <h3 className="font-semibold">4. Legal Basis for Processing</h3>
          <p>
            Under UK GDPR, our legal basis for processing your personal data is
            your <strong>consent</strong>, which you provide when you subscribe
            to our mailing list. You can withdraw your consent at any time by
            clicking the unsubscribe link in any of our emails or by contacting
            us directly.
          </p>

          <h3 className="font-semibold">5. How We Store Your Data</h3>
          <p>
            Your data is stored securely on our email marketing platform,
            MailerLite. MailerLite is GDPR-compliant and stores data in secure
            servers.
          </p>
          <p>
            We retain your data for as long as you remain subscribed. Once you
            unsubscribe, your data is either deleted or anonymised unless
            required to be retained for legal reasons.
          </p>

          <h3 className="font-semibold">6. Your Rights</h3>
          <p>As a UK data subject, you have the right to:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>
              Lodge a complaint with the Information Commissioner&apos;s Office
              (ICO)
            </li>
          </ul>

          <h3 className="font-semibold">7. Contact Us</h3>
          <p>
            If you have any questions about this policy or your data, please
            contact us at:
          </p>
          <p>
            📧 <strong>general@sapphicsocialsuk.com</strong>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

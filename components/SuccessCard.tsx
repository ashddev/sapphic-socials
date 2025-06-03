import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { cn } from "@/lib/utils";
import SocialsButton from "./SocialsButton";

export default function SuccessCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("w-full flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">You&apos;re on the list!</CardTitle>
          <CardDescription>
            We’ll send you updates about our upcoming events and news.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Check out our socials!
            </span>
          </div>
          <div className="flex gap-3 justify-center mt-5">
            <SocialsButton
              link="https://www.instagram.com/sapphicsocialsuk/"
              icon={faInstagram}
            />
            <SocialsButton
              link="https://www.facebook.com/people/Sapphic-Socials/61570442771957/"
              icon={faFacebook}
            />
            <SocialsButton
              link="https://www.tiktok.com/@sapphicsocialsuk/"
              icon={faTiktok}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

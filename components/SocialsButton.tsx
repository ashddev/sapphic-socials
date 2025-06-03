import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface SocialButtonProps {
  link: string;
  icon: IconDefinition;
}

export default function SocialsButton({ link, icon }: SocialButtonProps) {
  return (
    <Button variant="secondary" className="size-11" asChild>
      <a href={link} target="_blank">
        <FontAwesomeIcon size="2xl" icon={icon} />
      </a>
    </Button>
  );
}

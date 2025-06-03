import Image from "next/image";
import SignUpForm from "../components/SignupForm";

export default function Home() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full sm:max-w-lg md:max-w-xl flex-col gap-6">
        <div className="flex items-center self-center">
          <div className="flex size-15 items-center justify-center">
            <Image
              src="/logo.jpg"
              width={100}
              height={100}
              alt={"Sapphic Socials"}
              className="rounded-full"
            />
          </div>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

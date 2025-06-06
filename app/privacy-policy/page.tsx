import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function Success() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full sm:max-w-lg md:max-w-xl flex-col gap-6">
        <PrivacyPolicy />
      </div>
    </div>
  );
}

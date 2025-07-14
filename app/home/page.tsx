import Calendar from "@/components/calendar/Calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export interface OutSavvyEvent {
  id: number;
  name: string;
  description: string;
  url: string;
  dates: EventDate[];
  status: string;
  image_url: string;
  location_name: string;
  address_town: string;
  address_postcode: string;
  price: string;
}

interface EventDate {
  startlocal: string;
  endlocal: string;
  timezone: string;
  event_date_description: string;
}

const Home = async () => {
  const OUTSAVVY_ACCESS_TOKEN = process.env.OUTSAVVY_ACCESS_TOKEN ?? "";

  const events = await fetch(`https://api.outsavvy.com/v1/events/search`, {
    headers: { Authorization: `Partner ${OUTSAVVY_ACCESS_TOKEN}` },
  }).then((data) => data.json());

  return (
    <div className="w-full">
      <section className="h-[10dvh] flex items-center justify-between bg-gray-50">
        <div className="font-semibold p-20 text-lg">The Sapphic Space</div>
        <div className="flex items-center p-20 gap-10">
          <div>About</div>
          <div>Our Team</div>
          <div>In The Press</div>
          <div className="flex gap-2 items-center">
            <div>Shop</div>
            <div>
              <ExternalLink size={15} />
            </div>
          </div>
          <div className="font-semibold text-lg rounded bg-pink-300 w-fit p-2 px-4">
            Buy Tickets
          </div>
        </div>
      </section>

      <section className="h-[75dvh] flex items-center bg-pink-50">
        <div className="flex gap-5 flex-col p-20">
          <div className="text-4xl font-semibold">
            Welcome To the Sapphic Space
          </div>
          <div className="font-semibold text-2xl rounded bg-pink-300 w-fit p-2 px-4">
            Buy Tickets
          </div>
        </div>
      </section>

      <section className="h-[15dvh] flex items-center bg-gray-50">
        <div className="p-20 text-4xl font-semibold">As seen on...</div>
      </section>

      <section className="min-h-[100dvh] bg-pink-50 py-16">
        <h2 className="font-semibold text-4xl text-center mb-10">
          Upcoming Events
        </h2>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/3">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Event 1</CardTitle>
              </CardHeader>
              <CardContent>Test</CardContent>
            </Card>
          </div>
          <div className="w-full lg:w-2/3">
            <Calendar events={events.events as OutSavvyEvent[]} />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold">The Sapphic Space UK</h3>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:underline text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

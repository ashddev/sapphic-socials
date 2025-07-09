import Calendar from "@/components/calendar/Calendar";

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
    <div>
      <div className="h-[100dvh]">
        <div className="p-5 text-4xl font-semibold">
          Welcome To the Sapphic Space
        </div>
      </div>
      <div className="h-[100dvh] flex flex-col gap-6">
        <h2 className="font-semibold text-4xl text-center">Upcoming Events</h2>
        <Calendar events={events.events as OutSavvyEvent[]} />
      </div>
    </div>
  );
};

export default Home;

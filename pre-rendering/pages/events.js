import { useRouter } from "next/router";
import { useState } from "react";

export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <h1>List of Events</h1>
      {events.map((event) =>  (
          <div key={event.id}>
            <h4>
              {event.id}. {event.title}, {event.date} | {event.category}
            </h4>
            <p>{event.description}</p>
            <hr />
          </div>
        ))}
      <h2>Shallow Routing</h2>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <hr />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const eventList = await response.json();

  return { props: { eventList } };
}

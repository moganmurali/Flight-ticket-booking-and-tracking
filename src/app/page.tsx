import FlightSearch from '@/components/FlightSearch';
import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <>
      <div className="title-container">
        <h1>Global Sky Tracker</h1>
        <p className="subtitle">Premium Real-time Aviation Intelligence</p>
      </div>
      
      <FlightSearch />

      <BookingForm />
    </>
  );
}

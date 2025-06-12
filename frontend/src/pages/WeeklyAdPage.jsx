import Navbar from "../components/Navbar";

export default function WeeklyAdPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: 40 }}>
        <h1>Weekly Circular</h1>
        <p>See this week’s specials and savings!</p>
        <h2>
          Valid Dates
          5/28/2025 - 06/10/2025
        </h2>
        <img src="weeklyad.png" alt="" />
      </div>
    </>
  );
}
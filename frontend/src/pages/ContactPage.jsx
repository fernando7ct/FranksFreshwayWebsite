import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: 40 }}>
        <h1>Contact Us</h1>
        <p>Address: 600 Pearson Drive, Genoa, IL 60135</p>
        <p>Phone: (815) 784-2216</p>
        {/* Add contact form or map here */}
      </div>
    </>
  );
}
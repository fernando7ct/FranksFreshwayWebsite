import Navbar from "../components/Navbar";

export default function DepartmentsPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: 40 }}>
        <h1>Departments</h1>
        <ul>
          <li>Bakery</li>
          <li>Meat</li>
          <li>Produce</li>
          <li>Dairy</li>
          <li>Specialty</li>
        </ul>
      </div>
    </>
  );
}
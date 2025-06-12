import Navbar from "../components/Navbar";
import heroImg from "/img1.png";

const weeklyAds = [
  {
    title: "Fresh Produce Deals",
    desc: "Save on seasonal fruits and vegetables this week.",
    img: "fresh.jpg",
  },
  {
    title: "Meat & Poultry Specials",
    desc: "Exclusive offers on premium cuts of meat and poultry.",
    img: "meat.jpg",
  },
  {
    title: "Dairy & Cheese Discounts",
    desc: "Special prices on a wide selection of dairy and cheese products.",
    img: "dairy.jpg",
  },
];

const departments = [
  { name: "Bakery", img: "bakery.jpg" },
  { name: "Meat", img: "meat.jpg" },
  { name: "Produce", img: "fresh.jpg" },
  { name: "Dairy", img: "dairy.jpg" },
  { name: "Specialty", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&q=80" }
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div
        className="homepage-container"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 24,
          padding: "32px 40px 64px 40px",
          marginTop: 48,
          boxShadow: "0 8px 24px rgba(80, 45, 45, 0.08)"
        }}>

        {/* --- HERO SECTION --- */}
        <div
          className="homepage-hero"
          style={{
            position: "relative",
            marginBottom: 40,
            borderRadius: 24,
            overflow: "hidden", // Fixes the gray overlay issue!
          }}
        >
          <img
            src={heroImg}
            alt="Farm Fresh"
            className="hero-img"
            style={{
              width: "100%",
              maxHeight: 340,
              objectFit: "cover",
              borderRadius: 18,
              display: "block",
            }}
          />
          <div
            className="hero-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "54px 54px",
              color: "#fff",
              background: "rgba(0,0,0,0.22)",
              borderRadius: 18,
              textShadow: "0 3px 12px rgba(0,0,0,0.21)",
              zIndex: 1,
            }}
          >
            <div style={{ fontSize: "2.6rem", fontWeight: "bold", marginBottom: 12 }}>
              Farm Fresh, Family Focused
            </div>
            <div style={{
              fontSize: "1.12rem",
              marginBottom: 20,
              maxWidth: "85%",
            }}>
              Experience the difference of locally sourced produce, delivered fresh from our farm to your family’s table.
            </div>
            <a
              href="/catalog"
              style={{
                background: "#ff4e4e",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: 8,
                fontSize: "1.13rem",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
                marginTop: 6,
                transition: "background 0.18s"
              }}
              onMouseOver={e => e.currentTarget.style.background = "#da3939"}
              onMouseOut={e => e.currentTarget.style.background = "#ff4e4e"}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* --- WEEKLY AD --- */}
        <h2 style={{ fontWeight: 600, fontSize: "1.23rem", margin: "0 0 20px 0" }}>Weekly Ad</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 28,
          marginBottom: 34,
        }}>
          {weeklyAds.map((ad) => (
            <div
              key={ad.title}
              style={{
                background: "#faf8f8",
                borderRadius: 16,
                padding: 18,
                boxShadow: "0 2px 10px rgba(80,45,45,0.07)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <img
                src={ad.img}
                alt={ad.title}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 12,
                  marginBottom: 12
                }}
              />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 600, color: "#222", fontSize: "1.07rem" }}>{ad.title}</div>
                <div style={{ color: "#777", fontSize: "1rem" }}>{ad.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Departments */}
        <h2 style={{ fontWeight: 600, fontSize: "1.23rem", margin: "0 0 20px 0" }}>Departments</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 18
        }}>
          {departments.map((dep) => (
            <div
              key={dep.name}
              style={{
                background: "#faf8f8",
                borderRadius: 14,
                padding: 16,
                boxShadow: "0 2px 10px rgba(80,45,45,0.06)",
                textAlign: "center"
              }}
            >
              <img
                src={dep.img}
                alt={dep.name}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 12,
                  marginBottom: 9
                }}
              />
              <div style={{ fontWeight: 600, color: "#222", fontSize: "1.06rem" }}>{dep.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
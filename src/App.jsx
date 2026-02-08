import React, { useState } from "react";

function App() {

const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");
  const whatsappNumber = "264817382939"; // replace with your WhatsApp number (no +)
  const whatsappMessage = `Hello, I would like to book a room at Jalash Self Catering Accommodation.
Check-in: ${checkIn}
Check-out: ${checkOut}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const bookingEmail = "jalashbookings@gmail.com";

const emailSubject = "Room Booking Request – Jalash Self Catering";

const emailBody = `Hello,

I would like to book a room at Jalash Self Catering Accommodation.

Check-in: ${checkIn}
Check-out: ${checkOut}

Please let me know availability and total cost.

Kind regards,
`;

const emailLink = `mailto:${bookingEmail}?subject=${encodeURIComponent(
  emailSubject
)}&body=${encodeURIComponent(emailBody)}`;

  const rooms = [
    { name: "Room 1", image: "/images/room1.jpeg" },
    { name: "Room 2", image: "/images/room2.jpeg" },
    { name: "Room 3", image: "/images/room3.jpeg" },
    { name: "Room 4", image: "/images/room4.jpeg" },
    { name: "Room 5", image: "/images/room5.jpeg" },
    { name: "Room 6", image: "/images/room6.jpeg" },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Header */}
      <header style={{ background: "#0f4c75", color: "#fff", padding: "20px" }}>
        <h1>Jalash Self Catering Accommodation</h1>
        <p>Ocks Avenue, Tamariskia, Swakopmund</p>
      </header>

      {/* About */}
      <section style={{ padding: "30px" }}>
        <h2>About Us</h2>
        <p>
          Jalash Self Catering Accommodation offers comfortable and affordable
          indoor rooms in a three-bedroom house setup. All rooms are private and
          ideal for short or long stays.
        </p>
        <ul>
          <li>Private bathroom (toilet & shower)</li>
          <li>Bar fridge in every room</li>
          <li>Coffee stand</li>
          <li>Wardrobe</li>
          <li>Shared kitchen with microwave</li>
        </ul>
      </section>

      {/* Pricing */}
      <section style={{ background: "#f4f4f4", padding: "30px" }}>
        <h2>Rates</h2>
        <p><strong>NAD 350</strong> – Single person</p>
        <p><strong>NAD 500</strong> – Two people sharing</p>
      </section>

      {/* Rooms */}
      <section style={{ padding: "30px" }}>
        <h2>Our Rooms</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {rooms.map((room, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "300px",
                padding: "15px",
              }}
            >
              <img
                src={room.image}
                alt={room.name}
                style={{ width: "100%", borderRadius: "6px" }}
              />
              <h3>{room.name}</h3>
              <p>
                Private indoor room with own bathroom, bar fridge, coffee stand,
                and wardrobe.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: "#f4f4f4", padding: "30px" }}>
        <h2>Gallery</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {rooms.map((room, index) => (
            <img
              key={index}
              src={room.image}
              alt={`Gallery ${index + 1}`}
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          ))}
        </div>
      </section>

    {/* Booking */}
<section style={{ padding: "30px", textAlign: "center" }}>
  <h2>Book Your Stay</h2>

  <div style={{ marginBottom: "15px" }}>
    <label><strong>Check-in date</strong></label><br />
    <input
      type="date"
      value={checkIn}
      onChange={(e) => setCheckIn(e.target.value)}
      style={{ padding: "10px", fontSize: "16px" }}
    />
  </div>

  <div style={{ marginBottom: "20px" }}>
    <label><strong>Check-out date</strong></label><br />
    <input
      type="date"
      value={checkOut}
      min={checkIn}
      onChange={(e) => setCheckOut(e.target.value)}
      style={{ padding: "10px", fontSize: "16px" }}
    />
  </div>

  {/* WhatsApp Button */}
  {checkIn && checkOut ? (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: "#25D366",
      color: "#fff",
      padding: "15px 25px",
      borderRadius: "6px",
      textDecoration: "none",
      fontSize: "18px",
    }}
  >
    Book via WhatsApp
  </a>
) : (
  <p style={{ color: "red" }}>Please select check-in and check-out dates</p>
)}

  {/* Email Button – PUT IT HERE */}
  <div style={{ marginTop: "15px" }}>
    <a
      href={emailLink}
      style={{
        background: "#0f4c75",
        color: "#fff",
        padding: "12px 22px",
        borderRadius: "6px",
        textDecoration: "none",
        fontSize: "16px",
        display: "inline-block",
      }}
    >
      Book via Email
    </a>
  </div>
</section>

      {/* Footer */}
      <footer
        style={{
          background: "#0f4c75",
          color: "#fff",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <p>© 2026 Jalash Self Catering Accommodation</p>
        <p>Swakopmund, Namibia</p>
      </footer>
    </div>

  );
}

export default App;

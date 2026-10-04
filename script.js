const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");
btn?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));


// Reservation request: opens WhatsApp with the form details.
// This sends a message draft; the cafe must confirm the booking.
const reservationForm = document.querySelector("#reservation-form");
reservationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(reservationForm);
  const value = (key) => String(data.get(key) || "").trim();
  const message = [
    "Halo Apple Bear Cafe, saya ingin mengajukan reservasi meja.",
    "",
    `Nama: ${value("name")}`,
    `Tanggal: ${value("date")}`,
    `Jam: ${value("time")}`,
    `Jumlah tamu: ${value("guests")}`,
    `Nomor WhatsApp: ${value("contact")}`,
    `Catatan: ${value("notes") || "-"}`,
    "",
    "Mohon konfirmasi ketersediaan meja. Terima kasih."
  ].join("\\n");
  const phone = "628788330048";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

// Direct reservation via WhatsApp
const reservationForm = document.getElementById("reservationForm");
const reservationDate = document.getElementById("resDate");

if (reservationDate) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  reservationDate.min = `${yyyy}-${mm}-${dd}`;
}

if (reservationForm) {
  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("resName").value.trim();
    const phone = document.getElementById("resPhone").value.trim();
    const date = document.getElementById("resDate").value;
    const time = document.getElementById("resTime").value;
    const guests = document.getElementById("resGuests").value;
    const occasion = document.getElementById("resOccasion").value;
    const notes = document.getElementById("resNotes").value.trim() || "-";

    const dateObject = new Date(date + "T00:00:00");
    const formattedDate = dateObject.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });

    const message = [
      "Halo Apple Bear Cafe! 👋",
      "",
      "Saya ingin melakukan reservasi meja.",
      "",
      `👤 Nama: ${name}`,
      `📱 No. WhatsApp: ${phone}`,
      `📅 Tanggal: ${formattedDate}`,
      `⏰ Jam: ${time}`,
      `👥 Jumlah orang: ${guests}`,
      `🎉 Keperluan: ${occasion}`,
      `📝 Catatan: ${notes}`,
      "",
      "Mohon konfirmasi ketersediaan mejanya. Terima kasih!"
    ].join("\n");

    // WhatsApp direct chat link
    const whatsappNumber = "628788330048";
    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;
  });
}

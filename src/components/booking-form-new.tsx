"use client"

export default function BookingForm() {
  return (
    <form
      action="https://formsubmit.co/mgsalmagne@gmail.com"
      method="POST"
      className="space-y-4"
    >
      {/* optioneel: Formsubmit instellingen */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://michaelsalmagne.nl/bedankt" />

      <div>
        <label className="block text-sm font-medium">Naam</label>
        <input
          name="name"
          type="text"
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">E-mail</label>
        <input
          name="email"
          type="email"
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Bericht</label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Verzenden
      </button>
    </form>
  );
}

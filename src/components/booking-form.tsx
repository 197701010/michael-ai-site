"use client"

import { useState } from "react"

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Bedankt ${form.name}, je aanvraag is ontvangen!`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Naam</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={form.name}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">E-mail</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={form.email}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Bericht</label>
        <textarea
          name="message"
          onChange={handleChange}
          value={form.message}
          className="w-full border p-2 rounded"
          rows={4}
        />
      </div>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Verzenden
      </button>
    </form>
  )
}

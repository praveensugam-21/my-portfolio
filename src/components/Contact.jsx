import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      // Normally you send form data to API or email service.
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <h2 className="section-title">Contact Me</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 500,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 15,
          background: "#1e293b",
          padding: "20px",
          borderRadius: 12,
          boxShadow: "0 8px 24px rgb(3 105 161 / 0.4)",
        }}
      >
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: "#22c55e",
              fontWeight: "700",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Message sent! I'll get back to you soon.
          </motion.div>
        )}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            borderRadius: 6,
            border: "none",
            fontSize: "1rem",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            borderRadius: 6,
            border: "none",
            fontSize: "1rem",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            borderRadius: 6,
            border: "none",
            fontSize: "1rem",
          }}
        ></textarea>
        <motion.button
          type="submit"
          className="primary-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </motion.form>
    </>
  );
};

export default Contact;

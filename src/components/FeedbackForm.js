import React, { useState } from "react";

function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setFeedbackList([...feedbackList, form]);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="card form">
      <h3>Feedback Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h4>Submitted Feedback</h4>
      <ul>
        {feedbackList.map((fb, index) => (
          <li key={index}>
            <strong>{fb.name}</strong> ({fb.email}): {fb.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackForm;

import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";

// SubscriptionDetails page with review form (no local storage)
export default function SubscriptionDetails() {
    
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numeric = Number(rating);

    if (!review.trim()) {
      setError("Please write a review.");
      return;
    }
    if (!Number.isFinite(numeric) || numeric < 1 || numeric > 5) {
      setError("Rating must be a number between 1 and 5.");
      return;
    }

    // Here you'd normally send the data to a server instead of storing locally
    console.log({ review: review.trim(), rating: numeric });

    setReview("");
    setRating("");
    setError("");
  };

  return (
        <>
         <div><Navbar></Navbar></div>
      
    <div className="min-h-screen w-full my-24 flex items-start justify-center p-6 bg-gray-50">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow p-6 space-y-6">
        <h2 className="text-3xl font-semibold">Subscription Details</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="review" className="block text-sm font-medium text-gray-700">
              Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your thoughts about the service..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
              Rating (1–5)
            </label>
            <input
              id="rating"
              type="number"
              min={1}
              max={5}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-32 rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. 5"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-indigo-600 text-white font-medium py-2.5 hover:bg-indigo-700 active:translate-y-px transition"
          >
            Review
          </button>
        </form>
      </div>
    </div>
      </>
  );
}

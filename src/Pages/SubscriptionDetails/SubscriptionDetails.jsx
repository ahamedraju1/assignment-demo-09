import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { useParams } from "react-router";
import Footer from "../../Component/Footer/Footer";

// SubscriptionDetails page with review form (no local storage)
export const SubscriptionDetails = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/public/products.json')
      .then(res => res.json())
      .then((data) => {
        const selectData = data.find(item => item.id === Number(id));
        setProduct(selectData);
      })
  }, [id]);


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
      <div>
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto my-48">
        <img className="rounded-xl" src={product?.thumbnail} alt="images" />
        <div>
          <h2 className="text-3xl font-semibold my-5">{product?.name}</h2>
          <p className="text-2xl font-bold text-green-500">${product?.price}</p>
          <p className="text-gray-500 text-xl ">{product?.description}</p>
          <p className="text-gray-500 italic text-lg py-1">Category: {product?.tech_category}</p>
          <p className="text-xl font-semibold mb-2">features:</p>
          <ul className="text-lg list-disc list-inside text-gray-700">{product?.features?.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
          </ul>
          <p className="text-xl font-semibold my-2">Subscription Benefits:</p>
          <ul className="text-lg list-disc list-inside text-gray-700">{product?.subscription_benefits?.map((benefits) => (
            <li key={benefits}>{benefits}</li>
          ))}
          </ul>
          <p className="text-yellow-500 font-semibold text-lg">⭐ {product?.ratings} / 5</p>
          <p className="text-lg">{product?.number_of_reviews} reviews </p>
        </div>
      </div>


      <div className="flex w-full my-32 items-start justify-center p-6 bg-gray-50">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow p-6 space-y-6">
          <h2 className="text-3xl font-semibold">Subscription Details on your Opinion</h2>

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
      <Footer/>
    </>
  );
}
export default SubscriptionDetails

import { REVIEWS } from "../constants";

const Review = () => {
  return (
    <section
      id="review"
      className="max-w-6xl mx-auto border-b-2 pb-28 px-4"
    >
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
        Review
      </h2>

      <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
        {REVIEWS.text}
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {REVIEWS.reviews.map((review, index) => (
          <div
            key={index}
            className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-10 max-w-xs"
          >
            <p className="mb-4 text-center">{review.review}</p>

            <div className="flex items-center mt-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-sm font-bold">{review.name}</p>
                <p className="text-sm text-neutral-500">{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;

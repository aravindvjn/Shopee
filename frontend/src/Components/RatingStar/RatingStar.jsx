import React from "react";

const RatingStar = ({ rating = 0 }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const fill = Math.min(Math.max(rating - index, 0), 1);
        return (
          <div key={index} className="relative h-4 w-4">
            <svg
              className="absolute inset-0 h-full w-full text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.316 7.12h7.333c.969 0 1.371 1.24.588 1.81l-5.94 4.312 2.26 7.041c.3.923-.756 1.688-1.54 1.117l-6.077-4.42-6.076 4.42c-.784.57-1.84-.194-1.54-1.117l2.26-7.04-5.94-4.312c-.783-.57-.38-1.811.588-1.811h7.333l2.316-7.119z" />
            </svg>

            <svg
              className="absolute inset-0 h-full w-full text-pink-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{
                clipPath: `inset(0 ${100 - fill * 100}% 0 0)`,
              }}
            >
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.316 7.12h7.333c.969 0 1.371 1.24.588 1.81l-5.94 4.312 2.26 7.041c.3.923-.756 1.688-1.54 1.117l-6.077-4.42-6.076 4.42c-.784.57-1.84-.194-1.54-1.117l2.26-7.04-5.94-4.312c-.783-.57-.38-1.811.588-1.811h7.333l2.316-7.119z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default RatingStar;

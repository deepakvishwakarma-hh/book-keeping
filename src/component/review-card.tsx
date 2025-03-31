"use client";

import Image from "next/image";

interface ReviewCardProps {
  name: string;
  comment: string;
  image: string;
}

const ReviewCard = ({ comment, image, name }: ReviewCardProps) => {
  return (
    <article className="bg-white rounded-md p-6 border border-[#2a4741]">
      <div className="flex items-center justify-center">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Photo of ${name}`}
          width={150}
          height={150}
          style={{
            objectFit: "cover",
            borderRadius: "50%",
            marginBottom: "2rem",
          }}
        />
      </div>

      <div className="flex justify-center mb-4">
        <Image
          src="/comment.jpg"
          alt=""
          width={80}
          height={80}
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <blockquote className="text-[#2a4741] text-center mb-4">
        {comment}
      </blockquote>

      <cite className="block text-center font-medium text-[#2a4741]">
        {name}
      </cite>
    </article>
  );
};

export default ReviewCard;

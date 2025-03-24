import Image from "next/image";

interface ReviewCardProps {
  name: string;
  comment: string;
  image: string;
}

const ReviewCard = ({ comment, image, name }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-md p-6 border border-[#2a4741]">
      {/* <div className="h-24 w-24 rounded-full bg-[#2a4741] mx-auto mb-4 overflow-hidden">
        <Image
          src={image}
          alt="Testimonial"
          width={100}
          height={100}
          className="object-cover"
        />
      </div> */}

      <div className="flex items-center justify-center">
        <img
          src={image}
          alt="Testimonial"
          style={{
            width: "120px",
            height: "120px",
            backgroundSize: "cover",
            borderRadius: "50%",
            marginBottom: "2rem",
          }}
        />
      </div>

      <div className="flex justify-center mb-4">
        <Image
          src="/comment.jpg"
          alt="Testimonial"
          width={80}
          height={80}
          className="object-cover"
        />
      </div>
      <p className="text-[#2a4741] text-center mb-4">
        {"'"}
        {comment}
        {"'"}
      </p>
      <p className="text-center font-medium text-[#2a4741]">{name}</p>
    </div>
  );
};

export default ReviewCard;

import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
function RaitingStar({ stars, reviews }) {
  console.log(reviews);

  const ratings = Array.from({ length: 5 }, (elm, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= numbers ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return (
    <>
      <div>
      <span>{ratings}</span>
      <p>({reviews} customer reviews)</p></div>
    </>
  );
}
export default RaitingStar;

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      className="category-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${category.imageUrl}`}
        alt={category.name}
        onError={(e) => {
          e.target.src = "fallback-image-url.jpg";
        }}
      />
    </div>
  );
};

export default CategoryCard;

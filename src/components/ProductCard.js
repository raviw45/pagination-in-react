export default ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

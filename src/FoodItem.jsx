

const FoodItem = ({ name, price, imgSrc }) => {
  return (
    <div className="card">
      <div className={"imageWrapper"}>
        <img src={imgSrc} alt="" className={"image"} />
      </div>
      <div className={"detailsWrapper"}>
        <h3>{name}</h3>
        <p className={"details"}>{`Price: ${`${price}`}`}</p>
      </div>
    </div>
  );
};

export default FoodItem;
interface IProps {
  image: string;
  title: string;
  price: number | string;
  description: string;
  mightExistString?: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

const Product = (props: IProps) => {
  const { image, title, price, rating, description } = props;

  return (
    <div>
      <section className="Detail">
        <article className="Detail_thumbnail">
          <img style={{ maxWidth: "10%" }} src={image} />
        </article>
        <article className="Detail_content">
          <h2>{title}</h2>
        </article>
        <article className="Detail_info">
          <span className="Detail_price">${price}</span>
          <span className="Detail_rate">${rating.rate}</span>
        </article>
        <article className="Detail_description">
          <p>{description}</p>
        </article>
      </section>
    </div>
  );
};

export default Product;

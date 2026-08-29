import { Product } from "@/types/kitchen";

type LocationsProps = {
  products: Product[];
  search: string;
};

export default function Locations({
  products,
  search,
}: LocationsProps) {
  const locations = Array.from(
    new Set(
      products.map(
        (product) => product.location
      )
    )
  );

  const filtered = products.filter(
    (product) =>
      `${product.name} ${product.location}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">
            FIND IT FAST
          </span>

          <h2>
            Where does it belong?
          </h2>

          <p>
            Every tracked product has a
            storage location.
          </p>
        </div>
      </section>

      <div className="locationGrid">
        {locations.map((location) => (
          <div
            className="locationCard"
            key={location}
          >
            <strong>
              📍 {location}
            </strong>

            <small>
              {
                products.filter(
                  (product) =>
                    product.location ===
                    location
                ).length
              }{" "}
              products
            </small>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Items</h2>

        {filtered.map((product) => (
          <div
            className="listRow"
            key={product.id}
          >
            <div>
              <strong>
                {product.name}
              </strong>

              <small>
                {product.location}
              </small>
            </div>

            <strong>
              {product.quantity}{" "}
              {product.unit}
            </strong>
          </div>
        ))}
      </div>
    </>
  );
}

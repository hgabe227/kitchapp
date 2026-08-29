import { Product } from "@/types/kitchen";

type InventoryProps = {
  products: Product[];
  search: string;
  onAdjust: (
    productId: string,
    amount: number,
    type: "in" | "out"
  ) => void;
};

export default function Inventory({
  products,
  search,
  onAdjust,
}: InventoryProps) {
  const filtered = products.filter(
    (product) =>
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="sectionIntro">
        <h2>Inventory</h2>

        <p>
          Track everything currently in
          the kitchen.
        </p>
      </div>

      <div className="productGrid">
        {filtered.map((product) => {
          const percentage = Math.min(
            100,
            (product.quantity /
              Math.max(
                1,
                product.mandatory
              )) *
              100
          );

          const low =
            product.quantity <
            product.mandatory;

          return (
            <article
              className="productCard"
              key={product.id}
            >
              <span className="category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <strong
                className={
                  low ? "warningText" : ""
                }
              >
                {product.quantity}{" "}
                {product.unit}
              </strong>

              <p className="muted">
                📍 {product.location}
              </p>

              <div className="progress">
                <div
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              <small>
                Mandatory:{" "}
                {product.mandatory}{" "}
                {product.unit}
              </small>

              <div className="buttonRow">
                <button
                  onClick={() =>
                    onAdjust(
                      product.id,
                      1,
                      "in"
                    )
                  }
                >
                  +1
                </button>

                <button
                  onClick={() =>
                    onAdjust(
                      product.id,
                      -1,
                      "out"
                    )
                  }
                >
                  −1
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

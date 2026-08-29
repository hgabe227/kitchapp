import { Product } from "@/types/kitchen";

type ShoppingProps = {
  shopping: (Product & {
    buy: number;
  })[];
};

export default function Shopping({
  shopping,
}: ShoppingProps) {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">
            SMART SHOPPING
          </span>

          <h2>
            {shopping.length} items need
            attention.
          </h2>

          <p>
            The list is calculated from
            mandatory stock minus current
            inventory.
          </p>
        </div>

        <button
          className="primary"
          onClick={() => window.print()}
        >
          Print List
        </button>
      </section>

      <div className="card">
        <h2>Shopping List</h2>

        {shopping.length === 0 ? (
          <p className="empty">
            Everything is stocked to the
            mandatory level.
          </p>
        ) : (
          shopping.map((product) => (
            <div
              className="shoppingRow"
              key={product.id}
            >
              <div>
                <strong>
                  {product.name}
                </strong>

                <small>
                  Current:{" "}
                  {product.quantity}{" "}
                  {product.unit}
                </small>
              </div>

              <strong>
                Buy {product.buy}{" "}
                {product.unit}
              </strong>
            </div>
          ))
        )}
      </div>
    </>
  );
}

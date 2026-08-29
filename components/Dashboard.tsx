import Card from "./ui/Card";
import StatCard from "./ui/StatCard";
import {
  Product,
  WasteEntry,
  Movement,
} from "@/types/kitchen";

type DashboardProps = {
  products: Product[];
  lowStock: Product[];
  shopping: Product[];
  waste: WasteEntry[];
  movements: Movement[];
  onNavigate: (section: string) => void;
};

export default function Dashboard({
  products,
  lowStock,
  shopping,
  waste,
  movements,
  onNavigate,
}: DashboardProps) {
  const wasteTotal = waste.reduce(
    (total, entry) =>
      total + entry.quantity,
    0
  );

  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">
            KITCHAPP INTELLIGENCE
          </span>

          <h2>
            Your kitchen at a glance.
          </h2>

          <p>
            Inventory, waste, locations,
            shopping, and meal planning
            in one place.
          </p>
        </div>

        <button
          className="primary"
          onClick={() =>
            onNavigate("inventory")
          }
        >
          Record Stock
        </button>
      </section>

      <div className="stats">
        <StatCard
          label="Products"
          value={products.length}
        />

        <StatCard
          label="Low Stock"
          value={lowStock.length}
          warning
        />

        <StatCard
          label="Waste Entries"
          value={waste.length}
        />

        <StatCard
          label="Shopping Items"
          value={shopping.length}
          warning
        />
      </div>

      <div className="twoColumn">
        <Card title="Low Stock">
          {lowStock.length === 0 ? (
            <p className="empty">
              Everything is at mandatory stock.
            </p>
          ) : (
            lowStock.map((product) => (
              <div
                className="listRow"
                key={product.id}
              >
                <div>
                  <strong>
                    {product.name}
                  </strong>

                  <small>
                    {product.quantity}{" "}
                    {product.unit} /{" "}
                    {product.mandatory}{" "}
                    {product.unit}
                  </small>
                </div>

                <strong className="warningText">
                  Buy{" "}
                  {Math.ceil(
                    product.mandatory -
                      product.quantity
                  )}
                </strong>
              </div>
            ))
          )}
        </Card>

        <Card title="Waste Snapshot">
          <div className="bigNumber">
            {wasteTotal.toFixed(1)}
          </div>

          <p className="muted">
            Total recorded waste units.
          </p>

          <p className="muted">
            Waste history will help Kitchapp
            improve future preparation
            recommendations.
          </p>
        </Card>
      </div>

      <Card title="Recent Activity">
        {movements.length === 0 ? (
          <p className="empty">
            No activity yet.
          </p>
        ) : (
          movements
            .slice(-8)
            .reverse()
            .map((movement) => {
              const product =
                products.find(
                  (item) =>
                    item.id ===
                    movement.productId
                );

              return (
                <div
                  className="listRow"
                  key={movement.id}
                >
                  <div>
                    <strong>
                      {product?.name ??
                        "Unknown product"}
                    </strong>

                    <small>
                      {movement.type === "in"
                        ? "Stock received"
                        : "Stock used"}
                    </small>
                  </div>

                  <strong>
                    {movement.type === "in"
                      ? "+"
                      : "-"}
                    {movement.quantity}
                  </strong>
                </div>
              );
            })
        )}
      </Card>
    </>
  );
}

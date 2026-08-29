"use client";

import { useState } from "react";
import Card from "./ui/Card";
import {
  Product,
  WasteEntry,
} from "@/types/kitchen";

type WasteProps = {
  products: Product[];
  waste: WasteEntry[];
  onRecord: (
    productId: string,
    quantity: number,
    reason: string
  ) => void;
};

export default function Waste({
  products,
  waste,
  onRecord,
}: WasteProps) {
  const [productId, setProductId] =
    useState(products[0]?.id ?? "");

  const [quantity, setQuantity] =
    useState(1);

  const [reason, setReason] =
    useState("Spoilage");

  const reasons = [
    "Spoilage",
    "Overproduction",
    "Expired",
    "Preparation error",
    "Dropped or damaged",
    "Other",
  ];

  return (
    <>
      <div className="twoColumn">
        <Card title="Record Waste">
          <div className="form">
            <label>
              Product

              <select
                value={productId}
                onChange={(event) =>
                  setProductId(
                    event.target.value
                  )
                }
              >
                {products.map((product) => (
                  <option
                    value={product.id}
                    key={product.id}
                  >
                    {product.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Quantity

              <input
                type="number"
                min="0.1"
                step="0.1"
                value={quantity}
                onChange={(event) =>
                  setQuantity(
                    Number(
                      event.target.value
                    )
                  )
                }
              />
            </label>

            <label>
              Reason

              <select
                value={reason}
                onChange={(event) =>
                  setReason(
                    event.target.value
                  )
                }
              >
                {reasons.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <button
              className="primary"
              onClick={() => {
                if (
                  quantity > 0 &&
                  productId
                ) {
                  onRecord(
                    productId,
                    quantity,
                    reason
                  );
                }
              }}
            >
              Record Waste
            </button>
          </div>
        </Card>

        <Card title="Waste Intelligence">
          <p className="muted">
            Recorded waste builds the
            history needed for better
            preparation recommendations.
          </p>

          {products.map((product) => {
            const total = waste
              .filter(
                (entry) =>
                  entry.productId ===
                  product.id
              )
              .reduce(
                (sum, entry) =>
                  sum + entry.quantity,
                0
              );

            if (!total) {
              return null;
            }

            return (
              <div
                className="listRow"
                key={product.id}
              >
                <strong>
                  {product.name}
                </strong>

                <strong>
                  {total}{" "}
                  {product.unit}
                </strong>
              </div>
            );
          })}
        </Card>
      </div>

      <Card title="Waste History">
        {waste.length === 0 ? (
          <p className="empty">
            No waste recorded yet.
          </p>
        ) : (
          waste
            .slice()
            .reverse()
            .map((entry) => {
              const product =
                products.find(
                  (item) =>
                    item.id ===
                    entry.productId
                );

              return (
                <div
                  className="listRow"
                  key={entry.id}
                >
                  <div>
                    <strong>
                      {product?.name}
                    </strong>

                    <small>
                      {entry.reason}
                    </small>
                  </div>

                  <strong>
                    {entry.quantity}{" "}
                    {product?.unit}
                  </strong>
                </div>
              );
            })
        )}
      </Card>
    </>
  );
}

type StatCardProps = {
  label: string;
  value: React.ReactNode;
  warning?: boolean;
};

export default function StatCard({
  label,
  value,
  warning = false,
}: StatCardProps) {
  return (
    <div className={warning ? "stat warning" : "stat"}>
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

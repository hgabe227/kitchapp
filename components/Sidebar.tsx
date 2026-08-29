export const navigation = [
  ["dashboard", "Dashboard"],
  ["inventory", "Inventory"],
  ["locations", "Find & Organize"],
  ["waste", "Waste"],
  ["shopping", "Shopping List"],
  ["meals", "Meal Ideas"],
  ["planner", "2-Week Planner"],
  ["settings", "Settings"],
] as const;

type SidebarProps = {
  section: string;
  onNavigate: (section: string) => void;
  open: boolean;
  onClose: () => void;
  shoppingCount: number;
};

export default function Sidebar({
  section,
  onNavigate,
  open,
  onClose,
  shoppingCount,
}: SidebarProps) {
  return (
    <aside
      className={
        open ? "sidebar open" : "sidebar"
      }
    >
      <div className="brand">
        <div className="logo">K</div>

        <div>
          <strong>Kitchapp</strong>
          <small>Kitchen intelligence</small>
        </div>

        <button
          className="closeMenu"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>

      <nav>
        {navigation.map(([value, label]) => (
          <button
            key={value}
            className={
              section === value
                ? "navItem active"
                : "navItem"
            }
            onClick={() => onNavigate(value)}
          >
            {label}

            {value === "shopping" &&
              shoppingCount > 0 && (
                <span className="badge">
                  {shoppingCount}
                </span>
              )}
          </button>
        ))}
      </nav>

      <div className="sidebarBottom">
        Kitchapp v1.0.0
      </div>
    </aside>
  );
}

type TopbarProps = {
  title: string;
  search: string;
  onSearch: (value: string) => void;
  onMenu: () => void;
};

export default function Topbar({
  title,
  search,
  onSearch,
  onMenu,
}: TopbarProps) {
  return (
    <>
      <header className="mobileHeader">
        <button
          className="menuButton"
          onClick={onMenu}
          aria-label="Open menu"
        >
          ☰
        </button>

        <strong>🍴 Kitchapp</strong>

        <span>v1.0.0</span>
      </header>

      <header className="topbar">
        <div>
          <h1>{title}</h1>
          <p>
            Track smarter. Waste less. Stay organized.
          </p>
        </div>

        <input
          value={search}
          onChange={(event) =>
            onSearch(event.target.value)
          }
          placeholder="Search products..."
          aria-label="Search products"
        />
      </header>
    </>
  );
}

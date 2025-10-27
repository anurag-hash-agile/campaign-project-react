export default function Header() {
  return (
    <div className="navbar">
      <h1>Life Of Campaigns</h1>
      <button
        className="headerbutton"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        ADD CAMPAIGN
      </button>
    </div>
  );
}

export function SideBar() {
  return (
    <nav className="sidebar p-3 d-flex flex-column">
      <a href="/" className="d-block mb-4 text-white text-center text-decoration-none">
        <i className="bi bi-shield fs-1" id="icon"></i>
      </a>

      <div className="text-center mb-4 fs-1">
        <div
          className="bg-white text-dark rounded px-2 py-1 d-inline-block fw-bold tooltip-container"
          style={{ fontSize: '12px' }}
          title="Alex Lim"
        >
          AL
          <span className="tooltip-text">Logo Al</span>
        </div>
      </div>

      <ul className="nav nav-pills flex-column mb-auto text-white">
        {[
          { icon: 'clipboard', label: 'Board' },
          { icon: 'people', label: 'Team' },
          { icon: 'trophy', label: 'Award' },
          { icon: 'clipboard', label: 'Idea' },
          { icon: 'calendar4', label: 'Dates' },
          { icon: 'lightbulb', label: 'Idea' },
          { icon: 'gift', label: 'Surprise' },
          { icon: 'puzzle', label: 'Puzzle' },
        ].map(({ icon, label }, index) => (
          <li key={index} className="nav-item mb-3 text-center tooltip-container">
            <a href="#" className="nav-link text-white p-2" title={label}>
              <i className={`bi bi-${icon} fs-4`}></i>
              <span className="tooltip-text">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-5"></div>

      <div className="mt-auto">
        <ul className="nav nav-pills flex-column text-white">
          {[
            { icon: 'people', label: 'User' },
            { icon: 'database', label: 'Data' },
            { icon: 'gear', label: 'Settings' },
          ].map(({ icon, label }, index) => (
            <li key={index} className="nav-item mb-3 text-center tooltip-container">
              <a href="#" className="nav-link text-white p-2" title={label}>
                <i className={`bi bi-${icon} fs-3`}></i>
                <span className="tooltip-text">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

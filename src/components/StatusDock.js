import React, { useEffect, useState } from "react";

function StatusDock() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <aside className="status-dock" aria-label="Availability status">
      <span className="status-led" aria-hidden="true" />
      <div className="status-copy">
        <strong>SSE · Online</strong>
        <span>
          Gurugram · IST {time} · Open to senior frontend roles
        </span>
      </div>
      <kbd className="status-kbd">ctrl k</kbd>
    </aside>
  );
}

function formatTime(date) {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });
}

export default StatusDock;

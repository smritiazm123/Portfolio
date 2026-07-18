import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const ACTIONS = [
  { id: "home", label: "Go home", hint: "Hero & story", path: "/", keys: "G H" },
  { id: "about", label: "About", hint: "Background & experience", path: "/about", keys: "G A" },
  { id: "projects", label: "Projects", hint: "Production work", path: "/project", keys: "G P" },
  { id: "resume", label: "Resume", hint: "PDF & highlights", path: "/resume", keys: "G R" },
  {
    id: "email",
    label: "Copy email",
    hint: "smritiazm123@gmail.com",
    action: "copy-email",
    keys: "C E",
  },
  {
    id: "theme",
    label: "Toggle sunrise / sunset",
    hint: "Theme switch",
    action: "theme",
    keys: "T",
  },
];

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ACTIONS;
    return ACTIONS.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    const onKey = (event) => {
      const isPalette =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isPalette) {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
      return;
    }
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const run = (item) => {
    if (!item) return;
    if (item.path) {
      navigate(item.path);
      setOpen(false);
      return;
    }
    if (item.action === "theme") {
      toggleTheme();
      setOpen(false);
      return;
    }
    if (item.action === "copy-email") {
      navigator.clipboard?.writeText("smritiazm123@gmail.com").then(() => {
        setToast("Email copied");
        window.setTimeout(() => setToast(""), 1600);
      });
      setOpen(false);
    }
  };

  const onInputKey = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      run(filtered[active]);
    }
  };

  return (
    <>
          <button
            type="button"
            className="cmd-launcher cmd-launcher-desktop"
            onClick={() => setOpen(true)}
            aria-label="Open command palette"
            title="Command palette (Ctrl/⌘ K)"
          >
            <span>⌘K</span>
          </button>

      {toast && <div className="cmd-toast">{toast}</div>}

      {open && (
        <div className="cmd-overlay" onClick={() => setOpen(false)} role="presentation">
          <div
            className="cmd-palette"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cmd-header">
              <span className="cmd-prompt">smriti@portfolio</span>
              <span className="cmd-path">~</span>
              <input
                ref={inputRef}
                className="cmd-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Search actions…"
                aria-label="Search commands"
              />
              <kbd className="cmd-esc">esc</kbd>
            </div>
            <ul className="cmd-list">
              {filtered.length === 0 && (
                <li className="cmd-empty">No matches. Try “projects” or “email”.</li>
              )}
              {filtered.map((item, index) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`cmd-item ${index === active ? "is-active" : ""}`}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => run(item)}
                  >
                    <span className="cmd-item-main">
                      <strong>{item.label}</strong>
                      <em>{item.hint}</em>
                    </span>
                    <kbd>{item.keys}</kbd>
                  </button>
                </li>
              ))}
            </ul>
            <div className="cmd-footer">
              <span>↑↓ navigate</span>
              <span>↵ run</span>
              <span>esc close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CommandPalette;

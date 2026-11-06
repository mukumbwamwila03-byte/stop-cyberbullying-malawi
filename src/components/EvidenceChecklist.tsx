"use client";

import { useState } from "react";
import { Check, CheckCheck, ClipboardCheck } from "lucide-react";

const checklistItems = [
  {
    id: "dates",
    label: "Note dates, times, and what happened in a private, secure place.",
  },
  {
    id: "accounts",
    label: "Record relevant account names or links without sharing them publicly.",
  },
  {
    id: "messages",
    label: "Keep original messages or screenshots only if it is safe and appropriate.",
  },
  {
    id: "context",
    label: "Keep enough context to understand what happened; do not edit the evidence.",
  },
  {
    id: "trusted",
    label: "Ask a trusted adult or professional how to share information safely.",
  },
];

export default function EvidenceChecklist() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const completed = checkedItems.length;

  function toggleItem(id: string) {
    setCheckedItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function resetChecklist() {
    setCheckedItems([]);
  }

  return (
    <section className="evidence-checklist" aria-labelledby="checklist-title">
      <div className="checklist-heading">
        <span className="checklist-heading-icon">
          <ClipboardCheck size={21} aria-hidden="true" />
        </span>
        <div>
          <p className="eyebrow eyebrow-green">Private to this page</p>
          <h2 id="checklist-title">Evidence checklist</h2>
        </div>
        <span className="checklist-count" aria-live="polite">
          {completed} of {checklistItems.length}
        </span>
      </div>
      <p className="checklist-description">
        Use these reminders only if you choose to keep a record. Your selections
        are not saved or sent anywhere; refreshing the page clears them.
      </p>
      <div className="checklist-progress" aria-hidden="true">
        <span style={{ width: `${(completed / checklistItems.length) * 100}%` }} />
      </div>
      <ul className="checklist-items">
        {checklistItems.map(({ id, label }) => {
          const checked = checkedItems.includes(id);

          return (
            <li key={id}>
              <label className={checked ? "checklist-item is-checked" : "checklist-item"}>
                <input
                  checked={checked}
                  onChange={() => toggleItem(id)}
                  type="checkbox"
                />
                <span className="checklist-checkbox" aria-hidden="true">
                  {checked && <Check size={14} />}
                </span>
                <span>{label}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="checklist-footer">
        <p>
          <CheckCheck size={15} aria-hidden="true" />
          Do not upload or send evidence through this website.
        </p>
        <button
          className="checklist-reset"
          disabled={completed === 0}
          onClick={resetChecklist}
          type="button"
        >
          Clear checklist
        </button>
      </div>
    </section>
  );
}

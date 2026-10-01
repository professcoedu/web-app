"use client";

import styles from "./NotificationRow.module.css";

function MailIcon({ read }) {
  return (
    <span className={styles.iconWrapper}>
      {read ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H12V18H4V8L12 13L20 8V13H22V6C22 4.9 21.1 4 20 4ZM12 11L4 6H20L12 11ZM17.34 22L13.8 18.46L15.21 17.05L17.33 19.17L21.57 14.93L23 16.34L17.34 22Z"
            fill="#6B7280"
          />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 8.98V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18L2.01 6C2.01 4.9 2.9 4 4 4H14.1C14.04 4.32 14 4.66 14 5C14 5.34 14.04 5.68 14.1 6H4L12 11L15.67 8.71C16.14 9.14 16.69 9.47 17.3 9.69L12 13L4 8V18H20V9.9C20.74 9.75 21.42 9.42 22 8.98Z"
            fill="#1C2B36"
          />
          <path
            d="M19 8C17.34 8 16 6.66 16 5C16 3.34 17.34 2 19 2C20.66 2 22 3.34 22 5C22 6.66 20.66 8 19 8Z"
            fill="#44AC21"
          />
        </svg>
      )}
    </span>
  );
}

export default function NotificationRow({ notification, isOpen, onToggle }) {
  const timestampClass = `${styles.timestamp} ${
    notification.read ? styles.read : "semiboldFont"
  }`;

  return (
    <div className={styles.row}>
      <MailIcon read={notification.read} />
      <div className={styles.content}>
        <span className={`${timestampClass} ${styles.mobileTimestamp}`}>
          {notification.timestamp}
        </span>
        <p
          className={`semiboldFont ${styles.title} ${
            notification.read ? styles.read : ""
          }`}
        >
          {notification.title}
        </p>
        <p
          className={`${styles.description} ${isOpen ? styles.expanded : ""} ${
            notification.read ? styles.read : ""
          }`}
        >
          {notification.description}
        </p>
      </div>
      <div className={styles.meta}>
        <span className={`${timestampClass} ${styles.desktopTimestamp}`}>
          {notification.timestamp}
        </span>
        <button
          type="button"
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          onClick={() => onToggle(notification.id)}
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

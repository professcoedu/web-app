"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import EmptyState from "@/app/_components/common/EmptyState/EmptyState";
import Loader from "@/app/_components/common/Loader/Loader";
import NotificationRow from "./NotificationRow";
import NotificationsMenu from "./NotificationsMenu";
import {
  useMarkAllNotificationsRead,
  useMarkNotificationRead,
  useNotifications,
} from "@/app/_hooks/useNotifications";
import styles from "./NotificationsList.module.css";

function formatTimestamp(isoString) {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const meridiem = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  return `${day}/${month}/${year} ${hours}:${minutes}${meridiem}`;
}

function describeNotification(apiNotification) {
  const { type, data } = apiNotification;

  if (type === "App\\Notifications\\PurchaseCompleted") {
    const titles = data.course_titles?.join(", ") || "your course";
    return {
      title: "Purchase completed",
      description: `Your purchase of ${titles} (ref: ${data.reference}) for ₦${data.amount} was successful.`,
    };
  }

  return {
    title: type?.split("\\").pop() || "Notification",
    description: "",
  };
}

function toNotification(apiNotification) {
  const { title, description } = describeNotification(apiNotification);

  return {
    id: apiNotification.id,
    title,
    description,
    read: Boolean(apiNotification.read_at),
    timestamp: formatTimestamp(apiNotification.created_at),
  };
}

export default function NotificationsList() {
  const { data, isLoading } = useNotifications();
  const queryClient = useQueryClient();
  const markNotificationRead = useMarkNotificationRead();
  const markAllNotificationsRead = useMarkAllNotificationsRead();
  const [hideRead, setHideRead] = useState(false);
  const [openIds, setOpenIds] = useState({});

  const notifications = (data?.data || []).map(toNotification);
  const visibleNotifications = hideRead
    ? notifications.filter((notification) => !notification.read)
    : notifications;

  function toggleRow(id) {
    const isOpening = !openIds[id];

    if (isOpening) {
      const notification = notifications.find((n) => n.id === id);
      if (notification && !notification.read) {
        markNotificationRead.mutate(id);
      }
    }

    setOpenIds((curr) => ({ ...curr, [id]: !curr[id] }));
  }

  function handleMarkAllRead() {
    markAllNotificationsRead.mutate();
  }

  function handleClearAll() {
    queryClient.setQueryData(["notifications"], (old) =>
      old ? { ...old, data: [] } : old
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.count}>
          <span>All notifications</span>
          <span className={styles.badge}>{notifications.length}</span>
        </div>

        <div className={styles.actions}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={hideRead}
              onChange={(e) => setHideRead(e.target.checked)}
            />
            Hide read notifications
          </label>

          <Link
            href="/student/account-settings"
            className={styles.iconButton}
            aria-label="Notification settings"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.2293 10C17.2293 10.34 17.1993 10.66 17.1593 10.98L19.2693 12.63C19.4593 12.78 19.5093 13.05 19.3893 13.27L17.3893 16.73C17.2693 16.95 17.0093 17.04 16.7793 16.95L14.2893 15.95C13.7693 16.34 13.2093 16.68 12.5993 16.93L12.2193 19.58C12.1893 19.82 11.9793 20 11.7293 20H7.72933C7.47933 20 7.26933 19.82 7.23933 19.58L6.85933 16.93C6.24933 16.68 5.68933 16.35 5.16933 15.95L2.67933 16.95C2.45933 17.03 2.18933 16.95 2.06933 16.73L0.0693316 13.27C-0.0506684 13.05 -0.000668393 12.78 0.189332 12.63L2.29933 10.98C2.25933 10.66 2.22933 10.33 2.22933 10C2.22933 9.67 2.25933 9.34 2.29933 9.02L0.189332 7.37C-0.000668393 7.22 -0.0606684 6.95 0.0693316 6.73L2.06933 3.27C2.18933 3.05 2.44933 2.96 2.67933 3.05L5.16933 4.05C5.68933 3.66 6.24933 3.32 6.85933 3.07L7.23933 0.42C7.26933 0.18 7.47933 0 7.72933 0H11.7293C11.9793 0 12.1893 0.18 12.2193 0.42L12.5993 3.07C13.2093 3.32 13.7693 3.65 14.2893 4.05L16.7793 3.05C16.9993 2.97 17.2693 3.05 17.3893 3.27L19.3893 6.73C19.5093 6.95 19.4593 7.22 19.2693 7.37L17.1593 9.02C17.1993 9.34 17.2293 9.66 17.2293 10ZM6.22933 10C6.22933 11.93 7.79933 13.5 9.72933 13.5C11.6593 13.5 13.2293 11.93 13.2293 10C13.2293 8.07 11.6593 6.5 9.72933 6.5C7.79933 6.5 6.22933 8.07 6.22933 10Z"
                fill="#6B7280"
              />
            </svg>
          </Link>

          <NotificationsMenu
            onMarkAllRead={handleMarkAllRead}
            onClearAll={handleClearAll}
          />
        </div>
      </div>

      {isLoading ? (
        <div className={styles.loading}>
          <Loader variant="dark" />
        </div>
      ) : visibleNotifications.length === 0 ? (
        <EmptyState
          illustration="/images/empty-student-courses.png"
          heading="No notifications here"
          description="You're all good"
        />
      ) : (
        <div className={styles.list}>
          {visibleNotifications.map((notification) => (
            <NotificationRow
              key={notification.id}
              notification={notification}
              isOpen={!!openIds[notification.id]}
              onToggle={toggleRow}
            />
          ))}
        </div>
      )}
    </div>
  );
}

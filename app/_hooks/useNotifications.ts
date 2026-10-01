import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "@/app/_utils/auth-store";

export interface ApiNotification {
  id: string;
  type: string;
  data: Record<string, unknown>;
  read_at: string | null;
  created_at: string;
}

interface NotificationsResponse {
  data: ApiNotification[];
  total: number;
  [key: string]: unknown;
}

async function fetchNotifications(): Promise<NotificationsResponse> {
  const res = await fetch("/api/notifications");
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch notifications");
  }

  return data;
}

export function useNotifications() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
    enabled: isAuthenticated,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}

async function markNotificationRead(id: string): Promise<void> {
  const res = await fetch(`/api/notifications/${id}/read`, { method: "POST" });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Failed to mark notification as read");
  }
}

export function useMarkNotificationRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markNotificationRead,
    onSuccess: (_data, id) => {
      queryClient.setQueryData(
        ["notifications"],
        (old: NotificationsResponse | undefined) =>
          old
            ? {
                ...old,
                data: old.data.map((n) =>
                  n.id === id
                    ? { ...n, read_at: n.read_at ?? new Date().toISOString() }
                    : n
                ),
              }
            : old
      );
      queryClient.setQueryData(
        ["notifications-unread-count"],
        (old: number | undefined) => Math.max(0, (old || 0) - 1)
      );
    },
  });
}

async function markAllNotificationsRead(): Promise<void> {
  const res = await fetch("/api/notifications/read-all", { method: "POST" });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Failed to mark all notifications as read");
  }
}

export function useMarkAllNotificationsRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAllNotificationsRead,
    onSuccess: () => {
      queryClient.setQueryData(
        ["notifications"],
        (old: NotificationsResponse | undefined) =>
          old
            ? {
                ...old,
                data: old.data.map((n) => ({
                  ...n,
                  read_at: n.read_at ?? new Date().toISOString(),
                })),
              }
            : old
      );
      queryClient.setQueryData(["notifications-unread-count"], 0);
    },
  });
}

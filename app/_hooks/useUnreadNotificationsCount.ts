import { useQuery } from "@tanstack/react-query";
import useAuthStore from "@/app/_utils/auth-store";

async function fetchUnreadCount(): Promise<number> {
  const res = await fetch("/api/notifications/unread-count");
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch unread count");
  }

  return data.unread_count || 0;
}

export function useUnreadNotificationsCount() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: ["notifications-unread-count"],
    queryFn: fetchUnreadCount,
    enabled: isAuthenticated,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}

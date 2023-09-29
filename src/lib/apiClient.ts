import { goto } from "$app/navigation";
import type { IUser } from "../Types/User";

export async function apiFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const userJson = localStorage.getItem("user");
  if (!userJson) {
    goto("/");
  }
  const user: IUser = JSON.parse(userJson);
  if (!user) {
    goto("/");
  }
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${user.password}`,
    ...options.headers,
  };

  const requestOptions: RequestInit = {
    ...options,
    headers,
  };

  return await fetch(url, requestOptions);
}

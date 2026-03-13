import { useSearchParams } from "react-router-dom";

export type AccessLevel = "family" | "vip" | "general";

export const useAccessLevel = (): AccessLevel => {
  const [searchParams] = useSearchParams();
  const access = searchParams.get("access");
  
  if (access === "family" || access === "vip") return access;
  return "general";
};

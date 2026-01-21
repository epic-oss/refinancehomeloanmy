import { SITE_CONFIG } from "@/lib/constants";

export function DynamicYear() {
  return <>{SITE_CONFIG.currentYear}</>;
}

// src/app/page.tsx
import { pageMetadata } from "../lib/metadata";
import HomeContent from "../components/HomeContent";

export function generateMetadata() {
  return pageMetadata.home;
}

export default function Page() {
  return <HomeContent />;
}
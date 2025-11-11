
import { Suspense } from "react";
import PaintingsClient from "./PaintingsClient";

export default function PaintingsPage() {
  return (
    <Suspense fallback={<div style={{ padding: "2rem" }}>Loading gallery...</div>}>
      <PaintingsClient />
    </Suspense>
  );
}

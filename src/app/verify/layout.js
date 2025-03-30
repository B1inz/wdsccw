import { Suspense } from "react";
import VerifyPage from "./page";

export default function VerifyLayout() {
  return (
    <Suspense fallback={<div>Loading verification...</div>}>
      <VerifyPage />
    </Suspense>
  );
}
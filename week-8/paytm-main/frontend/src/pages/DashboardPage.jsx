import React, { Suspense } from "react";
import { Await } from "react-router-dom";

function DashboardPage() {
  return (
    <Suspense>
      <Await>
        <Dashboard />
      </Await>
    </Suspense>
  );
}

export default DashboardPage;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ request }) => {};

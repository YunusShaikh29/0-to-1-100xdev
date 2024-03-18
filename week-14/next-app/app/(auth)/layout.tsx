import React from "react"
export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="border-b text-center">
        20% off for the next 3 days
        {children}
    </div>
}
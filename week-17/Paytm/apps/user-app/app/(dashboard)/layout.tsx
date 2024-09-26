import { SidebarItem } from "../../components/SidebarItem";
import { HomeIcon, TransferIcon, TransactionsIcon } from "@repo/ui/icons";

import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex">
      <div className="w-72 border-r border-slate-300 mr-4 pt-28">
        <div>
          <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
          <SidebarItem
            href={"/transfer"}
            icon={<TransferIcon />}
            title="Transfer"
          />
          <SidebarItem
            href={"/transactions"}
            icon={<TransactionsIcon />}
            title="Transactions"
          />
        </div>
      </div>
      {children}
    </div>
  );
}

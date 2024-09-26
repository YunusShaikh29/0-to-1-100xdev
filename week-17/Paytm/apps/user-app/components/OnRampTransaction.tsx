import { Card } from "@repo/ui/card";

// enum Status {
//   Success = "Success",
//   Failure = "Failure",
//   Processing = "Processing",
// }

export const OnRampTransaction = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: "Success" | "Failure" | "Processing";
    provider: string;
  }[];
}) => {
  if (!transactions.length || transactions.length === 0) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center py-8">No Recent Transactions</div>
      </Card>
    );
  }

  return (
    <Card title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between border-b border-slate-300 mb-2">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

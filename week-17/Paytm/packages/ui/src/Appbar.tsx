import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => {};
  onSignout: () => {};
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between border-b px-4 border-slate-300">
      <div className="text-lg flex flex-col justify-center">WalletPAY</div>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignin : onSignout}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};

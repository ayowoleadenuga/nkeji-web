import { Avatar, AvatarFallback } from "@nkeji-web/components/ui/avatar";
import { Button } from "@nkeji-web/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@nkeji-web/components/ui/dropdown-menu";
import { User } from "@nkeji-web/lib/global-types";
import { useDispatch } from "react-redux";
import { logoutAction } from "@nkeji-web/redux/features/authSlice";

export function UserNav({ user }: { user: User }) {
  const { first_name, last_name, email } = user;
  const dispatch = useDispatch();
  if (!user) {
    return <div></div>;
  }
  const logout = () => {
    dispatch(logoutAction());
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full hover:bg-none"
        >
          <Avatar className="h-9 w-9">
            <AvatarFallback>{`${first_name[0]}${last_name[0]}`}</AvatarFallback>
          </Avatar>
          <p className="text-sm ml-2 text-white font-medium leading-none">{`${first_name} ${last_name}`}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

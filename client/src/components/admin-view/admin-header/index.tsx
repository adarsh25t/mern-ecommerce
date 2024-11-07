
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../ui/dropdown-menu'
import { Avatar, AvatarFallback } from '../../ui/avatar'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '../../ui/button';

function AdminHeader() {

  const userState = useSelector((state: RootState) => state.auth);
  const firstTwoLetters = userState.user?.email ? userState.user?.email.substring(0, 2) : '';
  const ProfileIcon = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className='border-none outline-none'>
          <Avatar >
            <AvatarFallback>{firstTwoLetters.toUpperCase()}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mr-2'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <Button className='admin-logout-button' >
            <LogOut />
            Logout
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <header className="w-full flex items-center justify-between p-4 shadow-md">
      <Button variant={'link'}>
        <Menu />
      </Button>
      <ProfileIcon />
    </header>
  )
}

export default AdminHeader
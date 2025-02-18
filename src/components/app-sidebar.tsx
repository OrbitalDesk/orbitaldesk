'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, Calendar, Home, Inbox, Search, Settings, LogOut, ShoppingCart, LayoutDashboard, Logs } from 'lucide-react';
import Image from 'next/image';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import SettingsAlertComponent from '@/components/settingsAlert';

// Menu items.
const sidebarItems = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home,
  },
];

const sidebarItems_freelancer = [
  {
    title: 'Overview',
    url: '/dashboard/freelancer',
    icon: LayoutDashboard,
  },
  {
    title: 'Logs',
    url: '#',
    icon: Logs,
  },
];

const account2 = {
  name: 'shadcn',
  role: 'admin',
  email: 'm@example.com',
  avatar: '/avatars/shadcn.jpg',
};
const account = {
  name: 'zwergtuete',
  role: 'admin',
  email: 'zwergtuete@outlook.com',
  avatar: '/avatars/zwergtuete.png',
};

export function AppSidebar() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sidebar>
      <SidebarContent>
        <div className="border-b h-[65px] flex items-center justify-center">
          <Image src={'/logo_banner_lightMode.png'} alt="logo_banner" width={157} height={40} />
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Freelancer</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuSub className="ml-2">
                {sidebarItems_freelancer.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-full h-[60px] justify-between flex gap-3">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={account2.avatar} />
                  <AvatarFallback>{account2.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-left">
                  <p className="text-sm leading-none font-semibold">{account2.name}</p>
                  <p className="text-xs">{account2.email}</p>
                </div>
              </div>
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[234px] p-0">
            <Card className="border-none overflow-hidden">
              <CardHeader className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={account2.avatar} />
                    <AvatarFallback>{account2.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-left max-w-[136px] overflow-hidden">
                    <p className="text-sm leading-none font-semibold">{account2.name}</p>
                    <p className="text-xs max-w-[136px] overflow-hidden">{account2.email}</p>
                  </div>
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="p-0 flex flex-col my-4 gap-y-1">
                {/* Settings */}
                <SettingsAlertComponent />
                {/* Settings */}
                {/* Notifications */}
                <AlertDialog>
                  <AlertDialogTrigger className="flex mx-4 gap-2 items-center">
                    <Inbox size="16" color="black" />
                    <span className="text-sm">Notifications</span>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <Settings size="16" color="black" />
                        <span>Settings</span>
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                {/* Notifications */}
              </CardContent>
              <Separator />
              <CardFooter className="p-0 flex flex-col my-4 items-start">
                <a href="" className="flex items-center gap-2 mx-4 text-sm">
                  <LogOut size="16" color="black" />
                  Log out
                </a>
              </CardFooter>
            </Card>
          </PopoverContent>
        </Popover>
      </SidebarFooter>
    </Sidebar>
  );
}

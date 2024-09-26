"use client";
import { protectedRoutes } from "@/src/constant";
import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthServices";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavabrDropdown = () => {
  const router = useRouter();
  const { user ,setIsLoading : userLoading} = useUser()
  const pathname = usePathname();

  
  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  };

  const handleLogout = () => {
    logout();
    userLoading(true)
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }

  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
         <DropdownItem onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>

        <DropdownItem onClick={() => handleNavigation("/profile/create-posts")}>
          Create Posts
        </DropdownItem>

        <DropdownItem onClick={() => handleNavigation("/settings")}>
          Settings
        </DropdownItem> 

        <DropdownItem onClick={() => handleLogout()} key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavabrDropdown;

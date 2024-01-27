import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

interface UserAvatar_I {
    src: string;
    username: string;
}

const UserAvatar = (props: UserAvatar_I) => {
  return (
    <Avatar className="cursor-pointer group relative h-12 w-12">
      <AvatarImage src={props.src} alt={props.username} className="object-cover" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

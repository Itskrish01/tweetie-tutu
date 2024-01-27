import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTweetContext } from "../../store/context";
import { UploadIcon } from "lucide-react";

const ImageUpload = () => {
  const { tweetData, setTweetData } = useTweetContext();
  function handleChange(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setTweetData({
          ...tweetData,
          userProfileImage: reader.result, // Base64 string
        });
      };

      reader.readAsDataURL(file);
    }
  }
  return (
    <Avatar className="cursor-pointer group relative h-12 w-12">
      <label
        htmlFor="user-image"
        className="absolute cursor-pointer w-full h-full bg-white/50 opacity-0 group-hover:opacity-100 transition-all duration-150 flex items-center justify-center"
      >
        <UploadIcon size={14} className="text-gray-700" />
        <input id="user-image" type="file" hidden onChange={handleChange} />
      </label>

      <AvatarImage src={tweetData.userProfileImage as string} alt={tweetData.username} className="object-cover" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default ImageUpload;

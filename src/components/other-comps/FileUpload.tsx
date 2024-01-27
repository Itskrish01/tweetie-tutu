import { Trash2, UploadIcon } from "lucide-react";
import React from "react";
import { useTweetContext } from "../../store/context";

const FileUpload = () => {
  const { tweetData, setTweetData } = useTweetContext();
 
  function handleChange(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setTweetData({
          ...tweetData,
          contentImage: reader.result, // Base64 string
        });
      };

      reader.readAsDataURL(file);
    }
  }
  return (
    <>
      <label
        htmlFor="file-upload"
        className="relative flex flex-col justify-center w-full overflow-hidden cursor-pointer rounded-lg border-2  border-dashed border-gray-300 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        {tweetData.contentImage !== "" ? (
          <>
            <div className="h-full opacity-0 text-slate-700 hover:opacity-100 transition-all justify-center gap-2 duration-150 flex items-center w-full bg-white/70 absolute">
              <UploadIcon className="h-5 w-5" />{" "}
              <span>Upload another image</span>
            </div>
            <img
              src={tweetData.contentImage as string}
              alt="tweetie image"
              className="w-full h-full object-cover "
            />
          </>
        ) : (
          <div className="py-6">
            <UploadIcon className="mx-auto" />{" "}
            <span className="mt-2 block text-sm font-semibold dark:text-slate-400 text-gray-900">
              Upload image
            </span>
          </div>
        )}
        {tweetData.contentImage !== "" && (
          <div className="absolute top-1 right-1 rounded-md bg-white/90 p-2 ">
            <Trash2
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setTweetData({ ...tweetData, contentImage: "" });
              }}
              className="text-red-500 float-end"
            />
          </div>
        )}

        <input type="file" id="file-upload" hidden onChange={handleChange} />
      </label>
    </>
  );
};

export default FileUpload;

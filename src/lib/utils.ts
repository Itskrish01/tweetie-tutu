import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getVerifiedIcon(iconType: "none" | "gold" | "blue"){
  if(iconType === "blue"){
    return '/images/verfied-icons/verify.png';
  }else if(iconType === "gold"){
    return '/images/verfied-icons/gold-verify.png';
  }else {
    return '';
  }
}

export function getFormattedNumber(digit: number){
  const formattedValue = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(digit);

  return formattedValue;
}
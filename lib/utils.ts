import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function registryUrl(path: string) {
  console.log(process.env.NEXT_PUBLIC_REGISTRY_URL)
  return `${process.env.NEXT_PUBLIC_REGISTRY_URL}/r/${path}`
}


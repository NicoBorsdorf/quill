import clsx, { ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
    if (typeof window !== "undefined") return path
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`
    return `https://localhost:${process.env.PORT ?? 3000}${path}`
}

export function constructMetadata({
    title = "Quill - the APP",
    description = "Zis is a descriptin",
    image = "/thumbnail.png",
    icons = "/favicon.ico",
    noIndex = false
}: {
    title?: string,
    description?: string,
    image?: string,
    icons?: string,
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title: title,
            description: description,
            images: [{
                url: image
            }]
        },
        icons,
        metadataBase: new URL("https://localhost:3000"),
        themeColor: "#FFF",
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
}
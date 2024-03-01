import { type Metadata } from "next";
import "@/assets/styles/globals.css";
import "@/assets/styles/fonts.css";
import { defaultTheme } from "@/theme/default-theme";
import { ThemeProvider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "Jessie & Matthew",
  description: "Jessie and Matthew wedding page",
  keywords: ["Jessie", "Matthew", "wedding"],
  robots: "index, follow",
  twitter: {
    creator: "@mystict_",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export const runtime = "edge";

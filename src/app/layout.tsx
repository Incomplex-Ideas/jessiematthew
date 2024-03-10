import { type Metadata } from "next";
import "@/assets/styles/globals.css";
import "@/assets/styles/fonts.css";
import { defaultTheme } from "@/theme/default-theme";
import { ThemeProvider } from "@mui/material";
import "aos/dist/aos.css";
import "animate.css";

export const metadata: Metadata = {
  title: "Jessie & Matthew",
  description: "Jessie and Matthew wedding page",
  keywords: ["Jessie", "Matthew", "wedding"],
  robots: "index, follow",
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

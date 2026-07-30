import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mediafy | پلتفرم مدیریت و انتشار فیلم و سریال (VOD)",
  description: "مدیافای (Mediafy) سیستم پیشرفته و هوشمند فیلم و سریال با قابلیت آرشیو خودکار با TMDB، پخش‌کننده ویدیویی پیشرفته، سیستم اشتراک ویژه و داشبورد مدیریت اختصاصی.",
  keywords: "VOD, پخش آنلاین فیلم, اسکریپت فیلم و سریال, راه اندازی VOD, اشتراک ویژه فیلم, TMDB فارسی, مدیافای, Mediafy",
  authors: [{ name: "Mediafy Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-claude-bg text-claude-text selection:bg-claude-terracotta/20 selection:text-claude-terracotta-dark">
        {children}
      </body>
    </html>
  );
}

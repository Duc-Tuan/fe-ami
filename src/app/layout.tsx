"use client";

import SplashScreen from "@/components/SplashScreen";
import AOSInit from "@/config/aos";
import { useThemeColor } from "@/hook/useThemeColor";
import Footer from "@/templates/footer";
import Header from "@/templates/header";
import { hexToRgba } from "@/types/functGlobal";
import { ConfigProvider } from "antd";
import { useState } from "react";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const primaryColor = useThemeColor();
  const [showSplash, setShowSplash] = useState(true);
  const [showAOS, setShowAOS] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={`min-h-full flex flex-col`}>
        {showSplash && (
          <SplashScreen handleSplashComplete={handleSplashComplete} setShowAOS={setShowAOS}/>
        )}

        <div
          style={{
            transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
          }}
          className="flex-1 flex flex-col relative"
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: primaryColor,
                borderRadius: 2,
              },
              components: {
                Menu: {
                  itemHoverBg: hexToRgba(primaryColor, 0.1),
                  itemHoverColor: primaryColor,
                },
              },
            }}
          >
            <Header />
            <SmoothScroll>
              <main>{children}</main>
            </SmoothScroll>
            <Footer />
            {!showAOS && <AOSInit />}
          </ConfigProvider>
        </div>
      </body>
    </html>
  );
}

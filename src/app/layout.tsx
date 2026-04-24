import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Flight Tracker | Premium Sky Experience",
  description: "Track global flights with real-time updates and cinematic visuals.",
};

const BackgroundLayer = () => (
  <div className="background-animation-layer">
    <div className="clouds-container">
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />
    </div>
    <img 
      src="/images/planes/emirates.png" 
      alt="Emirates Plane" 
      className="plane-animation plane-1" 
    />
    <img 
      src="/images/planes/delta.png" 
      alt="Delta Plane" 
      className="plane-animation plane-2" 
    />
    <img 
      src="/images/planes/emirates.png" 
      alt="Global Plane" 
      className="plane-animation plane-3" 
    />
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundLayer />
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

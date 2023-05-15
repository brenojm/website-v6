import "@styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Arpan Neupane",
  description: "Developer Portfolio",
  icons: {
    icon: "@app/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={`app tracking-widest antialiased ${roboto.className}`}>
          {children}
        </main>
      </body>
    </html>
  );
}

import Layout from "../Components/Layout";
import "./globals.css";

export const metadata = {
  title: "Daliy Dashboard",
  description: "Dashboard app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

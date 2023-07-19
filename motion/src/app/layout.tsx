import Navbar from "@/components/HomeComps/Navbar";
import "./globals.scss";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

export const metadata = {
  title: "Motion Design",
  description: "Generated by create next app",
};



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <ClerkProvider >
      <html lang="en">
        <body>
          <Navbar user={user} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

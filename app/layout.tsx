import "./globals.scss";

export const metadata = {
  title: "Component portfolio - Adam Peter",
  description:
    "A component portfolio website to show my favorite pieces of UI to the world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="main-body">
        {children}
      </body>
    </html>
  );
}

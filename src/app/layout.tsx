export const metadata = {
  title: `Drink the Fucking Water`,
  description: "Drink water :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

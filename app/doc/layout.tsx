import LiveBlocksProvider from "@/components/LiveBlocksProvider";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LiveBlocksProvider>PageLayout</LiveBlocksProvider>;
}

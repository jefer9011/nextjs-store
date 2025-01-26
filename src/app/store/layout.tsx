
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Navigate Categories</nav>
      {children}
    </main>
  );
}

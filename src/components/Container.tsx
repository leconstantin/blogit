export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto flex flex-col min-h-screen bg-white border-l border-r">
      {children}
    </div>
  );
}

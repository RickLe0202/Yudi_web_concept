export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="">
          {children}
        </div>
      </main>
    </div>
  )
}

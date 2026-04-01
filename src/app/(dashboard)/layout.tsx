import AuthGuard from "@/components/auth/AuthGuard";
import Sidebar from "@/components/shared/Sidebar";
import BottomNav from "@/components/shared/BottomNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-[#F5F0EB]">
        {/* Sidebar — desktop only */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-auto">{children}</main>

        {/* Bottom Nav — mobile only */}
        <BottomNav />
      </div>
    </AuthGuard>
  );
}

import AdminSidebar from "@/components/Navbar/AdminSidebar";
import PrelineScript from "@/components/PrelineScript";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AdminSidebar />
      <main>{children}</main>
      <PrelineScript />
    </section>
  );
}

import AuthButtonServer from "@/components/auth-button-server";

export default function page() {
  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
      <AuthButtonServer />
    </section>
  );
}

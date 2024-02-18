import AuthButtonServer from '@/components/auth-button-server'

export default function page () {
  return (
    <section className="grid place-items-center min-h-screen">
        <h1 className="text-5xl font-bold text-center mb-4">Login</h1>
        <AuthButtonServer />
    </section>
  )
}

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="card w-full max-w-md">
        <h2 className="text-4xl font-bold text-center mb-8">Welcome Back</h2>
        <form className="space-y-6">
          <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg" required />
          <input type="password" placeholder="Password" className="w-full p-4 border rounded-lg" required />
          <button type="submit" className="btn-primary w-full text-xl py-4">Sign In</button>
        </form>
        <p className="text-center mt-6">
          Don't have VIP access? <a href="/pricing" className="text-amber-600 font-bold">Join the Info Plan →</a>
        </p>
      </div>
    </div>
  );
}

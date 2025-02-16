import { LoginForm } from "@/features/auth/login-form/ui/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          로그인
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}

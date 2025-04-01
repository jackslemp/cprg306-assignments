import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Welcome to Our App</h1>
      {user ? (
        <>
          <p className="mt-4">Welcome, {user.displayName} ({user.email})</p>
          <button
            onClick={firebaseSignOut}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
          <Link href="/shopping-list" className="mt-4 text-blue-500 underline">
            Go to Shopping List
          </Link>
        </>
      ) : (
        <button
          onClick={gitHubSignIn}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login with GitHub
        </button>
      )}
    </div>
  );
}

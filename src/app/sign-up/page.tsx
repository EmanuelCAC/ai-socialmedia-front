import Input from "@/components/Input";
import Label from "@/components/Label";
import Link from "next/link";


export default function Singup() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4 justify-center items-center">
        <h2 className="font-semibold text-4xl mb-4">Create <span className="text-pink-700">Your</span> Account</h2>

        <form className="flex-1 flex flex-col min-w-64 w-fit">
          <h1 className="text-2xl font-medium">Sign up</h1>
          <p className="text-sm text-foreground">
            Already have an account?{" "}
            <Link className="text-primary font-medium underline" href="/">
              Sign in
            </Link>
          </p>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" required />
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
            <button type="submit" className="w-full h-10 bg-pink-700 text-white rounded-md hover:bg-pink-800 transition-colors duration-200">
              Sign up
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

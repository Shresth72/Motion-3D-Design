// import { type Metadata } from "next";
// import Link from "next/link";
// import { redirect } from "next/navigation";

// import { currentUser } from "@clerk/nextjs";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { OAuthSignIn } from "@/components/auth/oauth-signin";
// import { SignUpForm } from "@/components/forms/signup-form";
// import { Shell } from "@/components/shells/shell";

// export const metadata: Metadata = {

//   title: "Sign Up",
//   description: "Sign up for an account",
// };

// export default async function SignUpPage() {
//   const user = await currentUser();
//   if (user) redirect("/");

//   return (
//     <Shell>
//       <Card>
//         <CardHeader>
//           <CardTitle>Sign up</CardTitle>
//           <CardDescription>
//             Choose your preferred sign up method
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <OAuthSignIn />
//           <div>
//             <div>
//               <span />
//             </div>
//             <div>
//               <span>Or continue with</span>
//             </div>
//           </div>
//           <SignUpForm />
//         </CardContent>
//         <CardFooter>
//           <div>
//             Already have an account?{" "}
//             <Link href="/signin" aria-label="Sign in" className="">
//               Sign in
//             </Link>
//           </div>
//         </CardFooter>
//       </Card>
//     </Shell>
//   );
// }
import { SignUp } from "@clerk/nextjs";
import "../../../../styles/SignIn.scss";

const SignUpPage = () => {
  return (
    <div className="signup-container">
      
      <SignUp
        path="/signup"
        routing="path"
        signInUrl="/signin"
        redirectUrl="/"
      />
    </div>
  );
};

export default SignUpPage;

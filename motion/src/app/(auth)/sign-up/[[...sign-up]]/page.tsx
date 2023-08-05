import { SignUp, currentUser } from "@clerk/nextjs";
import "../../../../styles/SignIn.scss";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const user = await currentUser();

  return (
    <div className="signup-container">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/"
      />
    </div>
  );
};

export default SignUpPage;

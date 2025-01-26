import { useSelector } from "react-redux"; // Assuming you're using Redux
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAdminAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();


    const user = useSelector((state) => state.auth.user); // Replace with your auth state selector
    console.log(user)
    useEffect(() => {
      if (!user || user.role !== "admin") {
        router.push("/login"); // Redirect to login or unauthorized page
      }
    }, [user, router]);

    if (!user || user.role !== "admin") {
      return <p>Loading...</p>; // Optionally, show a loading state.
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;

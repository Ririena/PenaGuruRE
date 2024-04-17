"use client";
// components/AdminRouteProtection.js
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../config/supabase.js";

const GuruAuth = ({ children }) => {
  const router = useRouter();
const [userEmail,setUserEmail] =useState(null)
  useEffect(() => {
    const checkAdminAccess = async () => {
        try {
          const {
            data: { user },
          } = await supabase.auth.getUser();
          setUserEmail(user.email);
if(!user){
    router.push("/login")
}else{
    console.log("sudah ada akun ")
}
    checkAdminAccess();
  }
  catch (error) {
    console.error("Error checking user", error.message);
    setIsAdmin(false);
    router.push("/");
  }
}
}, [router]);
const UserAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [getLogins, setGetLogin] = useState(null);
  const [loading, setLoading] = useState(true)
  const router = useRouter();
  useEffect(() => {
    async function getLogin() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            setLoading(false)
            console.log("Awikwok")
          router.push("/login");
        }
        setGetLogin(user?.email);
        console.log(user);
        console.log("TESTESTSET");
      } catch (error) {
          setLoading(false)
          console.error(error.message);
        router.push("/login");
      }
    }
    getLogin();
  }, [getLogins]);

  return <>{children}</>;
};

export default GuruAuth;
export default UserAuth;

"use client";
import React from "react";
import { supabase } from "../../config/supabase.js";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

const LoginCard = () => {
  const router = useRouter();
  const toast = useToast(); // Added missing useToast
  const [getUser, setGetUser] = useState({
    email: "",
    password: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Fixed the typo 'e.prevent.default' to 'e.preventDefault'

    if (getUser.password !== getUser.password) {
      // Fixed the condition to check if passwords match
      toast({
        title: "Login Gagal",
        description: "Gagal, Password Tidak Sama",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsSubmit(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: getUser.email,
        password: getUser.password,
      });

      if (error) {
        toast({
          title: "Login Gagal.",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login Berhasil",
          description: "Selamat Datang Kembali",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push("/me");
      }
    } catch (error) {
      toast({
        title: "Login Gagal",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmit(false);
    }
  };

function handleDidnHave() {
  router.push('/register')
}

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={getUser.email}
          onChange={(e) => setGetUser({ ...getUser, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          value={getUser.password}
          onChange={(e) => setGetUser({ ...getUser, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form> */}

      <nav className="flex h-screen justify-center items-center ">
        <div className="shadow-lg">
          <div className="card w-96 bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="card-body p-6">
              <h2 className="card-title text-3xl font-bold mb-4 text-blue-500">
                Login for an Account
              </h2>
              <hr className="mb-4 border-blue-500" />
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="text-lg font-medium text-blue-500"
                  >
                    Email:
                  </label>
                  <input
                    value={getUser.email}
                    onChange={(e) =>
                      setGetUser({ ...getUser, email: e.target.value })
                    }
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Arienesu@gmail.com"
                    className="input input-bordered w-full mt-1 text-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="text-lg font-medium text-blue-500"
                  >
                    Password:
                  </label>
                  <input
                    value={getUser.password}
                    onChange={(e) =>
                      setGetUser({ ...getUser, password: e.target.value })
                    }
                    type="password"
                    id="password"
                    name="password"
                    placeholder="ArienaKawaii"
                    className="input input-bordered w-full mt-1 text-blue-500"
                  />
                </div>

                <div className="text-center mt-8">
                  <button
                    type="submit"
                    className="btn btn-primary w-full bg-blue-500 hover:bg-blue-700 focus:ring-blue-600 text-white"
                  >
                   {isSubmit ? "TEST" : "Login"}
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <button
                  onClick={handleDidnHave}
                  className=" link font-medium text-sky-600"
                >
                  Didn't have an Account?..
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LoginCard;

import user from "../services/authentication";
import { useAuth } from "../contexts/AuthContext";
import { Link, redirect } from "react-router-dom";
import { useState } from "react";

const style =
  "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5";

export default function SignupPage() {
  const [show, setShow] = useState({ message: "", status: false });
  const { setAuthUser } = useAuth();

  const submitData = (e) => {
    user.registerUser(e).then((res) => {
      if (res) {
        setShow(res.message);
        setAuthUser(res);
        redirect("/login");
      }
    });
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full max-w-96 bg-white rounded-lg shadow">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => submitData(e)}>
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="firstname"
                  className={style}
                  placeholder="Joe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="lastname"
                  className={style}
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={style}
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={style}
                  required
                />
              </div>
              {/* <a
                href="#"
                className="text-sm font-medium pt-2 inline-block text-gray-600 hover:underline">
                Forgot password?
              </a> */}
              <button
                type="submit"
                className="block w-full hover:bg-violet-500 hover:text-white rounded-full py-2 bg-violet-100 ">
                Create Account
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account yet?{" "}
                <Link
                  to="/login"
                  className="font-medium text-slate-600 hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <aside
        className={`absolute top-28 right-2 px-4 py-2 bg-violet-700 rounded-md text-white animate-bounce ${
          show.status ? "" : "hidden"
        }`}>
        {show.message}
      </aside>
    </section>
  );
}

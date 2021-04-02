import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();
  return (
    <img
      onClick={() => router.replace({ pathname: "/login" })}
      className="
      w-6 mt-auto my-6 d
      mx-0 pb-10
      lg:mx-auto lg:pb-0
      "
      src="/logout.svg"
    />
  );
}

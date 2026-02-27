import { Button } from "@/components/ui/button";
// import { authClient } from "@/lib/auth-client";
import { userService } from "@/service/user.service";
// import { cookies, headers } from "next/headers";

export default async function Home() {
  
  const {data } = await userService.getSession();

  console.log(data);



  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-6 md:p-10">
      <Button variant="outline">Button</Button>
      <h1 className="text-3xl font-bold">Welcome to the Blog Site</h1>
    </div>
  );
}

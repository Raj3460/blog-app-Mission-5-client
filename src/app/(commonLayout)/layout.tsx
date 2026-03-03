import { Navbar } from "@/components/layout/Navbar";

export default function CommonLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
      <div>
        <Navbar />
      {/* <h1> this is the common layout</h1> */}
      {children}

      </div>
    
  );
}
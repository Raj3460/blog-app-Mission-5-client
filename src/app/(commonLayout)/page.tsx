import BlogCard from "@/components/modules/homepage/blogPostCard";
import { blogService } from "@/service/blog.service";
import { BlogPost } from "@/types";
// import { cookies, headers } from "next/headers";

export default async function Home() {
  //* for chacke the session
  // const {data } = await userService.getSession();

  //* for chcke the get all post
  const { data } = await blogService.getBlogPost({
    isFeatured : false,
    // search : "hh",
  } , 
  {
   cache : "no-store"

  }

);

  // console.log(data);

  return (
    <div className="grid grid-cols-3 mx-auto px-4 max-w-7xl gap-5">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post}></BlogCard>
      ))}
    </div>
  );
}

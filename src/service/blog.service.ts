import { error } from "console";
import { env } from "../../env";

const API_URL = env.API_URL;

interface getBlogsParams {
  isFeatured: boolean;
  search?: string;
}

interface serviceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export const blogService = {
  getBlogPost: async function (
    params?: getBlogsParams,
    options?: serviceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/posts`);

      //*for search params add
      // url.searchParams.append("key" , "value")

      //*
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      //* for config
      const config: RequestInit = {};
      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      // console.log(url.toString());  // jehetu ami new url korci ,, ei jonno amak url.tostring kore nite hobe

      const res = await fetch(url.toString(), config);   
      const data = await res.json();
      return { data: data, error: null };


    //! { //* this is an example , thi is better way to get data from backend
      //! if ( data.success){
      //! return
      //!}}

      
    } catch (error) {
      return { data: null, error: { message: "Something Went wrong" } };
    }
  },

  //get blog id == each single id of post
  getBlogPostId: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);
      const data = await res.json();
      return {data: data , error : null}
    } catch (error) {
      return { data: null, error: { message: "Something Went wrong" } };
    }
  },
};

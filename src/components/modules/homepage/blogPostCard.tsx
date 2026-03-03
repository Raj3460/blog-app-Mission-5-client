
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, ImageIcon, MessageCircle, Tag } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types";
import { Badge } from "@/components/ui/badge";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group h-full overflow-hidden border border-gray-200/50 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-700 pb-3 rounded-xl">
  {/* Image Container */}
  <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
    {post.thumbnail ? (
      <Image
        src={post.thumbnail}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    ) : (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-gray-400 dark:text-gray-600">
        <ImageIcon className="h-10 w-10" />
        <span className="text-sm font-medium">No image</span>
      </div>
    )}
    
    {/* Featured Badge Overlay */}
    {post.isFeatured && (
      <div className="absolute top-3 left-3">
        <Badge className="bg-yellow-500 text-white border-none px-3 py-1 text-xs font-semibold shadow-md">
          ⭐ Featured
        </Badge>
      </div>
    )}
    
    {/* Status Badge (if needed) */}
    {/* {post.status && post.status !== 'PUBLISHED' && (
      <div className="absolute top-3 right-3">
        <Badge variant="outline" className="bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 border-gray-200 dark:border-gray-700">
          {post.status}
        </Badge>
      </div>
    )} */}
  </div>

  <CardHeader className="pb-2 pt-4">
    <CardTitle className="line-clamp-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 transition-colors group-hover:text-primary">
      {post.title}
    </CardTitle>
  </CardHeader>

  <CardContent className="space-y-4">
    <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
      {post.content}
    </p>

    {/* Tags Section */}
    {post.tags && post.tags.length > 0 && (
      <div className="flex flex-wrap items-center gap-2">
        <Tag className="h-3.5 w-3.5 text-gray-400" />
        {post.tags.slice(0, 3).map((tag, index) => (
          <Badge 
            key={index} 
            variant="secondary" 
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors cursor-default"
          >
            #{tag}
          </Badge>
        ))}
        {post.tags.length > 3 && (
          <Badge variant="outline" className="rounded-full border-gray-200 dark:border-gray-700 text-xs">
            +{post.tags.length - 3}
          </Badge>
        )}
      </div>
    )}
  </CardContent>

  <CardFooter className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-4 mt-2">
    <div className="flex items-center gap-4 text-sm">
      {/* Views */}
      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400" title={`${post.views} views`}>
        <Eye className="h-4 w-4" />
        <span className="font-medium">{post.views.toLocaleString()}</span>
      </div>

      {/* Comments */}
      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400" title={`${post._count?.comments || 0} comments`}>
        <MessageCircle className="h-4 w-4" />
        <span className="font-medium">{post._count?.comments || 0}</span>
      </div>

      {/* Date (optional - add if you want) */}
      {/* {post.createdAt && (
        <div className="hidden sm:flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-xs">
          <Calendar className="h-3.5 w-3.5" />
          <span>{new Date(post.createdAt).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          })}</span>
        </div>
      )} */}
    </div>

    <Link
      href={`/blogs/${post.id}`}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
    >
      <span>Read more</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
    </Link>
  </CardFooter>
</Card>
  );
}

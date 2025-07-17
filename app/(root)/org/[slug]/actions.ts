'use server'
import { blogTable, CreateBlogType } from "@/db/schema";
import { db } from "@/db";
export const createBlog=async (payload:CreateBlogType)=>
    {
const [result]=await db.insert(blogTable).values(payload).returning({id:blogTable.id});
return result.id; 
    }
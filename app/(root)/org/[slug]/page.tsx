'use client'
import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import * as React from 'react'
import { createBlog } from "./actions";
import { useOrganization } from "@clerk/nextjs";

export default function OrgLandingPage()
{
    const [content,setContent]=React.useState("");
    const [Title,setTitle]=React.useState("");
    const selectedOrg=useOrganization();
    console.log(selectedOrg);

    const handleCreateBlog= async ()=>
        {
            if(!selectedOrg.organization?.id) return;
createBlog(
    {
        body: content.trim(),
        orgId:selectedOrg.organization?.id,
        title:Title  
    })
    setTitle("");
    setContent("");
        }
    return(
        <main>
            <Nav/>
         <div className="p-10">
            <Input
            value={Title}
            onChange={e=>setTitle(e.target.value)}
            placeholder="He found me..">
            </Input>
            <Textarea
            placeholder="This is it guys, the snail has reached me.."
            value={content}
             onChange={e=>setContent(e.target.value)}
             className="mt-2">
            </Textarea>
            <Button onClick={handleCreateBlog} className="mt-2">
                Create a blog
            </Button>
         </div>
        </main>
    )
}
'use client'
import * as React from 'react';
import {UserButton} from '@clerk/nextjs';
import {OrganizationSwitcher} from '@clerk/nextjs'
const Nav:React.FC=()=>
    {
        return(
    <nav className='p-4 flex items-center justify-between '>
        <div>
            <h1 className='font-semibold text-2xl'>BLOSTER</h1>
        </div>
        <div className='flex gap-2 justify-center items-center'>
            <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug"/>
            <UserButton></UserButton>
        </div>
    </nav>
        )
    }
    export default Nav
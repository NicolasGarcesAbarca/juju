import type { NextPage } from 'next'
import React from 'react'

const Layout = ({ children }: any) => {
    return (<>
        <main>
            {children}
        </main>
        <style jsx global>
        {`
        h1{
            border: 2px solid red;
            color: hsl(290, 100%, 20%);
        }
        `}
        </style>
    </>)
}

export default Layout
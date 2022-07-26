import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Tweets from "../components/tweets";

function Home() {
    return(
        
        <div className=" ">
        <Head>
          <title>Twitter in Nextjs</title>
          <link rel="icon" href="/twitter.png" />
        </Head>

        <div className="grid grid-cols-9 mx-auto min-h-screen overflow-hidden ">
                <Navbar />
                
                <Tweets/>

                <Search/>
                
                
        </div>
        </div>
        
    )
}
export default Home;
import React from "react";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full md:h-[160vh] dark:bg-[#1f1f1f]">
            <Navbar />
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    );
}

export default MarketingLayout;
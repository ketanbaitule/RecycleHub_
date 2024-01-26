import Link from "next/link"

export default function StackBar(){
    return(
        <div className="fixed bottom-0 left-0 max-width-[500px] h-20 flex gap-[10px] bg-teal-500 text-white p-[10px] justify-center items-center">
            <Link className="border border-left border-slate-500" href={"/discover"}>Discover</Link>
            <Link className="border border-left border-slate-500" href={"/map"}>Map</Link>
            <Link className="border border-left border-slate-500" href={"/profile"}>Profile</Link>
        </div>
    )
}
export function SidebarClass1()
{
    //diplay:flex
    return <div className="flex">
        <div className="transition-all delay-1000   md:w-96  h-screen w-0  ">
            Sidebar
        </div>
        <div className="bg-green-500 w-full h-screen">
            Content
        </div>
    </div>
}
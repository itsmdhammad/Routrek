function AdminMenu(){
    return(
        <>
        <div className="flex w-screen h-20 font-mono flex justify-between bg-slate-300 absolute top-0 shadow-xl ">
            <div className="w-1/6 pl-20 flex justify-center items-center">
                <h1 className="text-4xl text-blue-600">Routrek</h1>
            </div>
            <div className=" w-3/6 flex justify-start items-center">
                <h1 className="text-2xl">Muhammad Hammad</h1>
            </div>
            <div className=" w-1/6 flex justify-around items-center ">
                <h1 className="text-xl">Profile</h1>
                <button className=" text-lg font-semibold border-none outline-none cursor-pointer transition delay-75 ease-in-out  hover:bg-blue-500 hover:text-white">Logout</button>
            </div>
        </div>


        {/* -------------------------------------------------------- */}

        <div className=" w-72 h-screen font-mono bg-slate-300 pt-24 flex items-end justify-end shadow-xl">
            <div className="w-64 text-[#7E30E1] h-full  flex flex-col gap-1">
                <div className="py-2 px-6 rounded-s-full hover:bg-blue-600 hover:text-white cursor-pointer transition delay-75 ease-in-out">
                    <h1 className="text-2xl">Manage Blogs</h1>
                </div>
                <div className="py-2 px-6 rounded-s-full hover:bg-blue-600 hover:text-white cursor-pointer transition delay-75 ease-in-out">
                    <h1 className="text-2xl">Write a Blog</h1>
                </div>
                <div className="py-2 px-6 rounded-s-full hover:bg-blue-600 hover:text-white cursor-pointer transition delay-75 ease-in-out">
                    <h1 className="text-2xl">Orders</h1>
                </div>
                <div className="py-2 px-6 rounded-s-full hover:bg-blue-600 hover:text-white cursor-pointer transition delay-75 ease-in-out">
                    <h1 className="text-2xl">Trips</h1>
                </div>
                <div className="py-2 px-6 rounded-s-full hover:bg-blue-600 hover:text-white cursor-pointer transition delay-75 ease-in-out">
                    <h1 className="text-2xl">Operators</h1>
                </div>
            </div>

        </div>


        </>
    )
}

export default AdminMenu
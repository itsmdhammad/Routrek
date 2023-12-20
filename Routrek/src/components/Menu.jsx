function Menu() {
  return (
    <>
    <div className="h-screen bg-gray-100">
    <div className="text-black w-screen flex items-start justify-around text-lg pt-4">
        <div>Image</div>
        <div className="flex justify-between gap-0">
            <a href="#" className=" hover:text-black hover:bg-slate-700 text-black rounded-full p-2 pl-4 pr-4">Discover</a>
            <a href="#" className="hover:text-black hover:bg-slate-100 text-black rounded-full p-2 pl-4 pr-4">Trips</a>
            <a href="#" className="hover:text-black hover:bg-slate-100 text-black rounded-full p-2 pl-4 pr-4">Reviews</a>
            <a href="#" className="hover:text-black hover:bg-slate-100 text-black rounded-full p-2 pl-4 pr-4">More</a>
        </div>
        <div className="flex justify-between gap-2">
            <a href="#" className="hover:bg-slate-100 hover:text-black text-black rounded-full p-2 pl-4 pr-4">USD</a>
            <a href="#" className="bg-black hover:bg-slate-900 hover:text-white text-white rounded-full p-2 pl-4 pr-4">Signin</a>
        </div>
    </div>
    </div>
    </>
  )
}

export default Menu

import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <div className="flex py-1">
                <div className="w-1/2 text-right pr-3">
                    <label>Name:</label> 
                </div>
                
                <div className="w-1/2 text-left pl-3">
                    <p>Anthony Magpantay</p>
                </div>
            </div>

            {/* <div class="md:flex md:items-center mb-6">
                <div class="w-1/2">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div class="w-1/2">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe" />
                </div>
            </div> */}

            <div className="flex py-1">
                <div className="w-1/2 text-right pr-3">
                    <label>Course and section:</label>
                </div>

                <div className="w-1/2 text-left pl-3">
                    <p>CPRG 306 F</p>
                </div>
            </div>

            <div className="flex py-1">
                <div className="w-1/2 text-right pr-3">
                    <label>Github Account:</label>
                </div>

                <div className="w-1/2 text-left pl-3">
                    <Link href="https://github.com/anthony040190" className="underline" target="_blank">
                        https://github.com/anthony040190
                    </Link>
                </div>
            </div>
        </div>
    );
}
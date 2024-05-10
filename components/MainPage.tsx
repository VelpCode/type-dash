import { Box } from "lucide-react"
import { Weight } from "lucide-react"
import { Beef } from "lucide-react"
import { Trophy } from "lucide-react"

export default function Mainpage() {


    const Boxes = [

        {   
            icon: <Weight />,
            name: "Exercises",
            id: 1

        },

        {
            icon: <Beef />,
            name: "Meal-plan",
            id: 2

        },
        {   
            icon: <Trophy />,
            name: "Personal Records",
            id: 3
        }


    ]




    return (


        <div>
            
            <div className=" mt-10 ml-5">
                <h1 className="font-semibold text-neutral-800 text-lg">Welcome Back Aman!</h1>
                <p className="text-sm text-neutral-500">Get back at your fitness, meal, and health goals harder than ever.  </p>
            </div>
            <div className="grid grid-cols-3">

                {Boxes.map((item, index) => (

                    <div className=" text-neutral-500 border shadow-sm p-10 h-[300px] rounded-xl w-[400px] mt-10 ml-3 cursor-pointer">
                        <div className="flex gap-4 border-b">{item.icon}{item.name}</div>
                        <div className="subhead">
                            <p className="mt-4 text-xs">Recents</p>
                            <div className = "h-10 border rounded-lg mt-2 p-2 text-xs">Backday: </div>
                            <div className = "h-10 border rounded-lg mt-2"></div>
                            <div className = "h-10 border rounded-lg mt-2"></div>

                        </div>
                    </div>

                ))}

            </div>


        </div>


    )


}
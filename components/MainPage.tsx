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


            <div className="grid grid-cols-3">

                {Boxes.map((item, index) => (

                    <div className="flex gap-4 border shadow-sm p-10 h-[300px] rounded-xl w-[300px] mt-10 ml-3">{item.icon}{item.name}</div>

                ))}

            </div>


        </div>


    )


}
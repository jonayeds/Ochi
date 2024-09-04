
const LandingPage = () => {
  return (
    <div className="w-full h-screen  pt-1">
        <div className="textStructure mt-40  px-20">
            {
                ["we create", "eye opening", 'presentation'].map((text, idx)=>(
                    <div key={idx} className="masker">
                <h1 className="font-foundersGrotesk text-9xl uppercase leading-none tracking-tight " >
                    {text}
                </h1>

            </div>
                ))
            }
            

           
        </div>
        <div className="border-t-2 border-zinc-700 mt-32 flex justify-between">
            {
                ["For Public anf Private Companies", "From the first pitch to IPO"].map((item, idx)=>(
                    <p key={idx} className="text-md font-light tracking-tight leading-none py-2 px-20">
                        {item}
                    </p>
                )
            )
            }
        </div>
    </div>
  )
}

export default LandingPage
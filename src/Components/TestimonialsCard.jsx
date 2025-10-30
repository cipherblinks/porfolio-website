function TestimonialsCard(props) {
    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center w-full border border-[rgb(43,43,46)] relative rounded-[16px] overflow-hidden py-[40px] px-[24px]">

                <div className="bg-[rgb(207,218,255)] blur-2xl rounded-[999px] opacity-[0.1] size-[200px] 
                                    z-10 absolute top-[-80px] left-[-80px] overflow-visible"></div>

                <div className="bg-[rgb(207,218,255)] blur-2xl rounded-[999px] opacity-[0.09] size-[200px] 
                                    z-10 absolute top-40 right-[-40px] overflow-visible"></div>

                <div className="h-[48px] relative w-[48px] rounded-[999px] overflow-hidden">
                    <img src={props.image} alt="" className="w-full h-full object-center object-cover" />
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ff4625" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4625" class="h-[19px] w-[16px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ff4625" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4625" class="h-[19px] w-[16px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ff4625" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4625" class="h-[19px] w-[16px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ff4625" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4625" class="h-[19px] w-[16px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>


                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ff4625" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4625" class="h-[19px] w-[16px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>

                </div>
                <div>
                    <p className="text-base font-semibold leading-[1.4em] text-center">
                        {props.comment}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center overflow-hidden relative w-full ">
                    <div className="flex items-center flex-col justify-start overflow-hidden relative">
                        <div className="flex items-center justify-start relative overflow-hidden gap-[8px]">
                            <p className="text-sm font-semibold leading-[1.6em]">{props.name}</p>
                            <p className="text-sm font-semibold leading-[1.6em]">•</p>
                            <p className="text-sm font-semibold leading-[1.6em]">{props.role}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-[rgba(255,255,255,.6)] text-sm font-semibold leading-[1.6em]">{props.company}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TestimonialsCard
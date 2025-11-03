import buttonPointer from '/src/assets/images/here-pointer.svg'

function Button(props) {
    return (
        <>
            {/* <!-- action button --> */}
            <div
                className="relative button-bg p-px rounded-full h-[42px] w-fit group cursor-pointer transition delay-200 duration-500 ease-in-out hover:-translate-y-0.5" onClick={props.onClick}>
                {/* <!-- button content --> */}
                <div
                    className="relative div-btn flex gap-2 text-(--primary-text) items-center px-6 py-2.5 md:py-2 rounded-[99px] hover:bg-button-dark overflow-hidden cursor-pointer">

                    <button className="text-sm md:text-base font-light md:font-medium tracking-tighter cursor-pointer">{props.name}</button>

                    <div className={`${props.icon ? 'block' : 'hidden'}`}>
                        <img src={buttonPointer} alt=""
                            className="origin-center will-change-transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </div>

                    {/* <!-- flash sweep --> */}
                    <div className="div-btn-flash">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Button
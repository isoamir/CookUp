function Buttons(children) {
    return (
        <button
            className="w-36 h-12 bg-custom-yellow text-white rounded-[10px] flex justify-center items-center"
        >
            {children}
        </button>
    );
}

export default Buttons;

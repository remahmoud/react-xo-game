import clsx from "clsx";

export default function Box({ value, onClick }) {
    return (
        <div
            onClick={onClick}
            className={clsx(
                "h-32 w-32 bg-black/50 flex items-center justify-center text-8xl p-10 rounded-xl cursor-pointer uppercase font-bold shadow-lg shadow-black/50 hover:shadow-inner hover:scale-95 transition-all select-none",
                value === "x" ? "text-yellow-600" : "text-sky-600"
            )}
        >
            {value}
        </div>
    );
}

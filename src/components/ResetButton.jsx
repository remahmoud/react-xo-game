export default function ResetButton({ onClick }) {
    return (
        <button
            onClick={() => onClick()}
            className="bg-black/50 shadow-lg shadow-black/50 text-rose-400 py-2 rounded-xl text-2xl font-bold tracking-wider hover:shadow-inner hover:scale-95 transition-all"
        >
            Reset Game
        </button>
    );
}

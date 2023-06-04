export default function Message({ message }) {
    return (
        <div className="text-center bg-black/50 shadow-lg shadow-black/50 text-green-600 py-2 rounded-xl text-2xl font-bold tracking-wider mb-6">
            {message}
        </div>
    );
}

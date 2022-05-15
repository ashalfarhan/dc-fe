export const WinCard = ({ score }: { score: number }) => {
  return (
    <div className="flex-1 flex flex-col justify-center text-center">
      <h3 className="text-4xl font-bold">Results</h3>
      <p className="pt-4">
        You got <span className="text-green-400">{score}</span> correct answers
      </p>
      <button
        onClick={() => window.location.reload()}
        className="inline w-auto mt-8 px-4 py-2 border-2 border-slate-600 font-bold"
      >
        Try again
      </button>
    </div>
  );
};

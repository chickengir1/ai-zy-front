export default function LoadingPulse() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75">
      <div className="flex space-x-2">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-4 w-4 animate-pulseAndMove rounded-full bg-indigo-500"
            style={{ animationDelay: `${index * 0.2}s` }}
          ></div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-medium text-indigo-600">
          잠시만 기다려주세요
        </p>
      </div>
    </div>
  );
}

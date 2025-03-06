export function AiDnaLoader() {
  return (
    <div className="flex h-96 w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="h-10 w-10 rounded-full border-4 border-gray-200">
          <div className="h-full w-full animate-spin rounded-full border-t-4 border-gray-600"></div>
        </div>
        <div className="text-center text-lg font-light text-gray-500">
          <span>열심히 답변을 만드는 중이에요.</span>
        </div>
      </div>
    </div>
  );
}

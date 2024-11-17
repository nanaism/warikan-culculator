import ExpenseList from "./components/ExpenseList";
import MemberList from "./components/MemberList";
import Result from "./components/Result";

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Warikan Calculator
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            メンバーと、立て替えた記録を記入してください。
            <br className="hidden sm:inline" />
            自動で最適な精算方法を算出します！
          </p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 justify-center items-start">
          <MemberList />
          <ExpenseList />
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;

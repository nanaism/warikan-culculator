import ExpenseList from "./components/ExpenseList";
import MemberList from "./components/MemberList";
import Result from "./components/Result";

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 p-8">
      <div className="container mx-auto bg-yellow-50 rounded-3xl shadow-[20px_20px_60px_#d4d1c0,-20px_-20px_60px_#fffde0] p-8">
        {/* Header */}
        <div className="space-y-6 text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-800 shadow-text">
            Warikan Calculator
          </h1>
          <p className="text-yellow-700 text-sm sm:text-base shadow-text">
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

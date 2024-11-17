import useResultLogic from "./hooks/useResultLogic";
import Card from "./ui/Card";

const Result = (): JSX.Element => {
  const warikanPlan = useResultLogic();

  return (
    <Card logo="💰" title="割り勘方法" className="w-full max-w-md mx-auto">
      <div className="space-y-2">
        {warikanPlan.length > 0 ? (
          warikanPlan.map((transfer) => (
            <div
              key={`${transfer.from}-${transfer.to}-${transfer.amount}`}
              className="p-2 bg-green-100 rounded text-sm sm:text-base"
            >
              <span className="font-semibold">{transfer.from}</span>さんが
              <span className="font-semibold">{transfer.to}</span>さんに
              <br className="sm:hidden" />
              <span className="font-semibold">
                {transfer.amount.toLocaleString()}
              </span>
              円を支払う
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-sm sm:text-base">
            まだ精算する内容がありません
          </div>
        )}
      </div>
    </Card>
  );
};

export default Result;

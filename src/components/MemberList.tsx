import { Plus } from "lucide-react";
import useWarikanStore from "../store/useWarikanStore";
import Button from "./ui/Button";
import Card from "./ui/Card";

const MemberList = (): JSX.Element => {
  const members = useWarikanStore((state) => state.members);
  const inputMember = useWarikanStore((state) => state.inputMember);
  const updateInputMember = useWarikanStore((state) => state.updateInputMember);
  const addMember = useWarikanStore((state) => state.addMember);

  return (
    <Card logo="👥" title="メンバーを追加" className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          placeholder="名前を入力"
          value={inputMember}
          onChange={(e) => updateInputMember(e.target.value)}
          className="h-10 px-2 border rounded flex-1 text-sm sm:text-base"
        />
        <Button onClick={addMember} className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-1" />
          追加
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {members.map((member) => (
          <div
            key={member}
            className="px-3 py-1 bg-blue-100 rounded-full text-sm sm:text-base"
          >
            {member}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MemberList;

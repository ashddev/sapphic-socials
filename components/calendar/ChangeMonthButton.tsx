import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface ChangeMonthButtonProps {
  direction: "future" | "past";
  currentMonth: number;
  monthSetter: Dispatch<SetStateAction<number>>;
  yearSetter: Dispatch<SetStateAction<number>>;
}

const ChangeMonthButton = ({
  direction,
  currentMonth,
  monthSetter,
  yearSetter,
}: ChangeMonthButtonProps) => {
  const clickHander = () => {
    if (direction === "past") {
      if (currentMonth === 0) yearSetter((prevYear) => prevYear - 1);
      monthSetter((prevMonth) => (prevMonth === 0 ? 11 : (prevMonth - 1) % 12));
    } else {
      if (currentMonth === 11) yearSetter((prevYear) => prevYear + 1);
      monthSetter((prevMonth) => (prevMonth + 1) % 12);
    }
  };

  return (
    <button
      className="border p-2 rounded-md text-2xl flex items-center justify-center cursor-pointer"
      onClick={clickHander}
    >
      {direction === "past" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
};

export default ChangeMonthButton;

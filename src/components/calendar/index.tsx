import { add, format } from "date-fns";
import { NextPage } from "next";
import { useState } from "react";
import ReactCalendar from "react-calendar";
import {
  INTERVAL,
  STORE_CLOSING_HOUR,
  STORE_OPENING_HOUR,
} from "../../constants/config";

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const index: NextPage = () => {
	
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });

  const getAvailableTime = () => {
    if (!date.justDate) return;
    const { justDate } = date;
    const beginning = add(justDate, { hours: STORE_OPENING_HOUR });
    const end = add(justDate, { hours: STORE_CLOSING_HOUR });
    const times = [];

    for (let i = beginning; i < end; i = add(i, { minutes: INTERVAL })) {
      times.push(i);
    }

    return times;
  };

  return (
    <div className="grid h-screen place-items-center">
      {date.justDate ? (
        <div className="flex flex-wrap items-center justify-center gap-4 p-5">
          {getAvailableTime()?.map((time) => (
            <button
              key={time.toString()}
              onClick={() =>
                setDate((prev) => ({
                  ...prev,
                  dateTime: time,
                }))
              }
              className="rounded-md bg-gray-300 px-1 py-2"
            >
              {format(time, "h:mm a")}
            </button>
          ))}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
          className="p-4 shadow-2xl"
        />
      )}
    </div>
  );
};

export default index;

import React, { ReactNode, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import classnames from "classnames";
import "./index.less";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);

const classPrefix = "custom-calendar";
const Weekdays = ["日", "一", "二", "三", "四", "五", "六"];

type CalendarProps = {
  // Add any props you need for the Calendar component
  value?: dayjs.Dayjs;
  selectAble?: "single" | "range";
} & (
  | {
      selectionMode?: undefined;
      value?: undefined;
      onChange?: undefined;
    }
  | {
      selectionMode: "single";
      value?: Dayjs | null;
      onChange?: (val: Dayjs | null) => void;
    }
  | {
      selectionMode: "range";
      value?: [Dayjs, Dayjs] | null;
      onChange?: (val: [Dayjs, Dayjs] | null) => void;
    }
);

const Calendar: React.FC<CalendarProps> = ({
  value,
  selectionMode = "range",
  selectAble = true,
}) => {
  // Add your calendar logic and JSX here

  const today = dayjs();
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(
    null
  );
  const [current, setCurrent] = useState(() => dayjs(today).date(1));

  const goToNextMonth = () => {
    setCurrent((prev) => {
      const next = prev.add(1, "month");
      console.log(next.format("YYYY-MM-DD"));
      return next;
    });
  };
  const goToPrevMonth = () => {
    setCurrent((prev) => prev.subtract(1, "month"));
  };

  const handleClickCell = (date: Dayjs) => {
    if (selectAble) {
      if (selectionMode === "single") {
        setDateRange([date, date]);
      } else if (selectionMode === "range") {
        if (!dateRange) {
          setDateRange([date, date]);
        } else {
          const [start, end] = dateRange;
          let range: [Dayjs, Dayjs] = [date, date];
          if (date.isBefore(start)) {
            range = [date, end];
          } else if (date.isAfter(end)) {
            range = [start, date];
          } else {
            range = [date, date];
          }
          setDateRange(range);
        }
      }
    }

    // 判断是否需要跳转到下个月
    const firstDateOfCurrentMonth = current.date(1);
    const lastDateOfCurrentMonth = current.endOf("month");
    if (date.isBefore(firstDateOfCurrentMonth)) {
      goToPrevMonth();
    } else if (date.isAfter(lastDateOfCurrentMonth)) {
        console.log('isAfter');
      goToNextMonth();
    }
  };

  const renderCells = () => {
    const cells: ReactNode[] = [];
    let iterator = current.subtract(current.isoWeekday(), "day");
    const startDate = current.date(1);
    const endDate = current.endOf("month");

    while (cells.length < 6 * 7) {
      const d = iterator;
      const disabled = d.isBefore(startDate) || d.isAfter(endDate);
      let isSelect = false;
      let isBegin = false;
      let isEnd = false;
      if (dateRange) {
        const [begin, end] = dateRange;
        isBegin = d.isSame(begin, "day");
        isEnd = d.isSame(end, "day");
        isSelect =
          isBegin ||
          isEnd ||
          (d.isAfter(begin, "day") && d.isBefore(end, "day"));
      }
      cells.push(
        <div
          className={classnames(`${classPrefix}-cells-cell-default`, {
            [`${classPrefix}-cells-cell-selected`]: isSelect,
            [`${classPrefix}-cells-cell-disabled`]: disabled,
          })}
          key={d.valueOf()}
          onClick={() => handleClickCell(d)}
        >
          <div className={`${classPrefix}-cells-cell-default-top`}>
            {d.format("D")}
          </div>
          <div className={`${classPrefix}-cells-cell-default-bottom`}>
            hello
          </div>
        </div>
      );
      iterator = d.add(1, "day");
    }
    return cells;
  };

  const header = (
    <>
      <div className={`${classPrefix}-header`}>
        {/* <div className={`${classPrefix}-header-container`}></div> */}
        <div className={`${classPrefix}-header-button`} onClick={goToPrevMonth}>
          《
        </div>
        <div className={`${classPrefix}-header-date`}>
          {current.format("YYYY-MM-DD")}
        </div>
        <div className={`${classPrefix}-header-button`} onClick={goToNextMonth}>
          》
        </div>
      </div>
    </>
  );

  const body = <div className={`${classPrefix}-cells`}>{renderCells()}</div>;

  const mark = (
    <div className={`${classPrefix}-mark`}>
      {Weekdays.map((item, index) => {
        return (
          <div className={`${classPrefix}-mark-item`} key={item}>
            {item}
          </div>
        );
      })}
    </div>
  );

  useEffect(() => {
    if (Array.isArray(value)) {
      const [start, end] = value;
      if (start && end && dayjs.isDayjs(start) && dayjs.isDayjs(end)) {
        setDateRange([start, end]);
        setCurrent(start.date(1));
      }
    } else if (value && dayjs.isDayjs(value)) {
      setDateRange([value, value]);
      setCurrent(value.date(1));
    }
  }, [value]);
  return (
    <div className={`${classPrefix}`}>
      {header}
      {mark}
      {body}
    </div>
  );
};

export default Calendar;

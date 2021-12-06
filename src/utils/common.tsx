export const setValue = (value: number) => {
  // debugger;
  let res = value / 1000000000000000000;
  return res;
};
export const getTimeDifference = (time: string) => {
  let tstart = new Date(time).getTime();
  let tend = Date.now();
  var diff = Math.floor((tend - tstart) / 1000),
    units = [
      { d: 60, l: "seconds" },
      { d: 60, l: "minutes" },
      { d: 24, l: "hours" },
      { d: 7, l: "days" },
    ];

  var s = "";
  for (var i = 0; i < units.length; ++i) {
    s =
      (diff % units[i].d > 0 ? diff % units[i].d : "") +
      (diff % units[i].d > 0 ? " " : "") +
      (diff % units[i].d > 0 ? units[i].l : "") +
      " " +
      s;
    diff = Math.floor(diff / units[i].d);
  }
  return s;
};

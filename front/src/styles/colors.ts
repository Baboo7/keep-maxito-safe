type IColor =
  | "black"
  | "darkbrown"
  | "lightbrown"
  | "lightgray"
  | "verylightgray"
  | "orange"
  | "lightorange"
  | "red"
  | "lightred"
  | "yellow"
  | "lightyellow"
  | "white";

export const colors: { [key in IColor]: string } = {
  black: "black",
  darkbrown: "#612E25",
  lightbrown: "#70392F",
  lightgray: "lightgray",
  verylightgray: "rgb(245,245,245)",
  orange: "rgb(255,165,0)",
  lightorange: "#ffc352",
  red: "#ff4500",
  lightred: "#ff875b",
  yellow: "rgb(255,215,0)",
  lightyellow: "#ffe366",
  white: "white"
};

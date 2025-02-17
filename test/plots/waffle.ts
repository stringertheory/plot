import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

const demographics = d3.csvParse(
  `group,label,freq
Infants <1,0-1,16467
Children <11,1-11,30098
Teens 12-17,12-17,20354
Adults 18+,18+,12456
Elderly 65+,65+,12456`,
  d3.autoType
);

export function waffleSquished() {
  return Plot.waffleX([10]).plot();
}

export function waffleMultiple() {
  return Plot.plot({
    y: {inset: 12},
    marks: [
      Plot.waffleY([4, 9, 24, 46, 66, 7], {multiple: 10, fill: "currentColor"}),
      Plot.waffleY([-4, -9, -24, -46, -66, -7], {multiple: 10, fill: "red"})
    ]
  });
}

export function waffleShorthand() {
  return Plot.plot({
    y: {inset: 12},
    marks: [
      Plot.waffleY([4, 9, 24, 46, 66, 7], {fill: "currentColor"}),
      Plot.waffleY([-4, -9, -24, -46, -66, -7], {fill: "red"})
    ]
  });
}

export function waffleStroke() {
  return Plot.plot({
    y: {inset: 12},
    marks: [
      Plot.waffleY([4, 9, 24, 46, 66, 7], {fill: "currentColor", stroke: "red", gap: 0}),
      Plot.waffleY([-4, -9, -24, -46, -66, -7], {fill: "red", stroke: "currentColor", gap: 0})
    ]
  });
}

export function waffleRound() {
  return Plot.plot({
    y: {inset: 12},
    marks: [
      Plot.waffleY([4, 9, 24, 46, 66, 7], {fill: "currentColor", rx: "100%"}),
      Plot.waffleY([-4, -9, -24, -46, -66, -7], {fill: "red", rx: "100%"})
    ]
  });
}

export function waffleStrokeMixed() {
  return Plot.plot({
    y: {insetBottom: 16},
    marks: [
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: [-1.1, -2.2, -3.3, -4.4, -5.5, -6.6],
          y2: [2.3, 4.5, 6.7, 7.8, 9.1, 10.2],
          unit: 0.2,
          fill: "currentColor",
          stroke: "red"
        }
      ),
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: [2.3, 4.5, 6.7, 7.8, 9.1, 10.2],
          y2: [-1.1, -2.2, -3.3, -4.4, -5.5, -6.6],
          unit: 0.2,
          gap: 10,
          fill: "red"
        }
      ),
      Plot.ruleY([0])
    ]
  });
}

export function waffleStrokeNegative() {
  return Plot.plot({
    x: {axis: "top"},
    marks: [
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: 0,
          y2: [-1.1, -2.2, -3.3, -4.4, -5.5, -6.6],
          unit: 0.2,
          fillOpacity: 0.4
        }
      ),
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: [-1.1, -2.2, -3.3, -4.4, -5.5, -6.6],
          y2: [-2.3, -4.5, -6.7, -7.8, -9.1, -10.2],
          unit: 0.2,
          fill: "currentColor",
          stroke: "red"
        }
      ),
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: [-1.1, -2.2, -3.3, -4.4, -5.5, -6.6],
          y2: 0,
          gap: 10,
          unit: 0.2,
          fillOpacity: 0.4
        }
      ),
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: [-2.3, -4.5, -6.7, -7.8, -9.1, -10.2],
          y2: [-1.1, -2.2, -3.3, -4.4, -5.5, -6.6],
          unit: 0.2,
          gap: 10,
          fill: "red"
        }
      ),
      Plot.ruleY([0])
    ]
  });
}

export function waffleStrokePositive() {
  return Plot.plot({
    marks: [
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: 0,
          y2: [1.1, 2.2, 3.3, 4.4, 5.5, 6.6],
          unit: 0.2,
          fillOpacity: 0.4
        }
      ),
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: [1.1, 2.2, 3.3, 4.4, 5.5, 6.6],
          y2: [2.3, 4.5, 6.7, 7.8, 9.1, 10.2],
          unit: 0.2,
          fill: "currentColor",
          stroke: "red"
        }
      ),
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: [1.1, 2.2, 3.3, 4.4, 5.5, 6.6],
          y2: 0,
          gap: 10,
          unit: 0.2,
          fillOpacity: 0.4
        }
      ),
      Plot.waffleY(
        {length: 6},
        {
          x: ["A", "B", "C", "D", "E", "F"],
          y1: [2.3, 4.5, 6.7, 7.8, 9.1, 10.2],
          y2: [1.1, 2.2, 3.3, 4.4, 5.5, 6.6],
          unit: 0.2,
          gap: 10,
          fill: "red"
        }
      ),
      Plot.ruleY([0])
    ]
  });
}

export function waffleX() {
  return Plot.plot({
    marginLeft: 80,
    y: {label: null},
    color: {scheme: "cool"},
    marks: [
      Plot.axisX({label: "Frequency (thousands)", tickFormat: (d) => d / 1000}),
      Plot.waffleX(demographics, {y: "group", fill: "group", x: "freq", unit: 100, sort: {y: null, color: null}}),
      Plot.ruleX([0])
    ]
  });
}

export function waffleXStacked() {
  return Plot.plot({
    height: 240,
    color: {scheme: "cool"},
    marks: [
      Plot.axisX({label: "Frequency (thousands)", tickFormat: (d) => d / 1000}),
      Plot.waffleX(demographics, {fill: "group", x: "freq", unit: 100, sort: {color: null}}),
      Plot.ruleX([0])
    ]
  });
}

export function waffleY() {
  return Plot.plot({
    x: {label: null},
    color: {scheme: "cool"},
    marks: [
      Plot.axisY({label: "Frequency (thousands)", tickFormat: (d) => d / 1000}),
      Plot.waffleY(demographics, {x: "group", fill: "group", y: "freq", unit: 100, sort: {x: null, color: null}}),
      Plot.ruleY([0])
    ]
  });
}

export function waffleYStacked() {
  return Plot.plot({
    y: {insetTop: 10},
    color: {scheme: "cool", legend: true},
    marks: [
      Plot.axisY({label: "Frequency (thousands)", tickFormat: (d) => d / 1000}),
      Plot.waffleY(demographics, {fill: "group", y: "freq", unit: 100, sort: {color: null}}),
      Plot.ruleY([0])
    ]
  });
}

export async function waffleYGrouped() {
  const athletes = await d3.csv<any>("data/athletes.csv", d3.autoType);
  return Plot.plot({
    marginBottom: 100,
    x: {tickRotate: -90, label: null},
    marks: [Plot.waffleY(athletes, Plot.groupX({y: "count"}, {x: "sport", unit: 10})), Plot.ruleY([0])]
  });
}

export function waffleHref() {
  return Plot.plot({
    inset: 10,
    marks: [
      Plot.waffleY(
        {length: 77},
        {
          y: 1,
          fill: (d, i) => i % 7,
          href: (d, i) => `/?${i}`,
          title: (d, i) => `waffle ${i}`,
          target: "_blank"
        }
      )
    ]
  });
}

export function waffleShapes() {
  const k = 10;
  let offset = 0;
  const waffle = (y1, y2) => {
    y1 += offset;
    y2 += offset;
    offset = Math.ceil(y2 / k) * k;
    return Plot.waffleY({length: 1}, {y1, y2, multiple: k, fill: y1, stroke: "black"});
  };
  return Plot.plot({
    height: 1200,
    color: {type: "categorical"},
    y: {domain: [0, 300]},
    marks: [
      Plot.waffleY({length: 1}, {y1: 0, y2: 300, multiple: 10, stroke: "currentColor", strokeOpacity: 0.2, gap: 0}),
      waffle(0, 1),
      waffle(0, 0.5),
      waffle(0.2, 0.8),
      waffle(0.6, 1.4),
      waffle(9.6, 10.4),
      waffle(0.6, 2),
      waffle(1, 2.4),
      waffle(0.6, 2.4),
      waffle(1, 3),
      waffle(9, 11),
      waffle(0.6, 3),
      waffle(1, 3.4),
      waffle(0.6, 3.4),
      waffle(7, 20),
      waffle(7.6, 20),
      waffle(0, 13),
      waffle(0, 12.4),
      waffle(7, 23),
      waffle(7.6, 22.4)
    ]
  });
}

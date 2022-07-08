import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {svg} from "htl";

export default async function () {
  const penguins = await d3.csv("data/penguins.csv", d3.autoType);
  return Plot.plot({
    color: {
      range: [
        "url(#grouped-12512014-1)",
        "url(#grouped-12512014-2)",
        "url(#grouped-12512014-3)",
        "url(#grouped-12512014-4)"
      ],
      legend: true
    },
    marks: [
      // Based on https://observablehq.com/@tomshanley/cheysson-color-palettes
      () => svg`<defs>
        <pattern id="grouped-12512014-1" width="100" height="100" patternUnits="userSpaceOnUse" stroke="#366788" stroke-width="3"><line x1="-53.03" y1="53.03" x2="53.03" y2="-53.03"/><line x1="-47.48" y1="58.59" x2="58.59" y2="-47.48"/><line x1="-41.92" y1="64.14" x2="64.14" y2="-41.92"/><line x1="-36.37" y1="69.7" x2="69.7" y2="-36.37"/><line x1="-30.81" y1="75.26" x2="75.26" y2="-30.81"/><line x1="-25.26" y1="80.81" x2="80.81" y2="-25.26"/><line x1="-19.7" y1="86.37" x2="86.37" y2="-19.7"/><line x1="-14.14" y1="91.92" x2="91.92" y2="-14.14"/><line x1="-8.59" y1="97.48" x2="97.48" y2="-8.59"/><line x1="-3.03" y1="103.03" x2="103.03" y2="-3.03"/><line x1="2.52" y1="108.59" x2="108.59" y2="2.52"/><line x1="8.08" y1="114.14" x2="114.14" y2="8.08"/><line x1="13.63" y1="119.7" x2="119.7" y2="13.63"/><line x1="19.19" y1="125.26" x2="125.26" y2="19.19"/><line x1="24.74" y1="130.81" x2="130.81" y2="24.74"/><line x1="30.3" y1="136.37" x2="136.37" y2="30.3"/><line x1="35.86" y1="141.92" x2="141.92" y2="35.86"/><line x1="41.41" y1="147.48" x2="147.48" y2="41.41"/><line x1="46.97" y1="153.03" x2="153.03" y2="46.97"/><line x1="153.03" y1="53.03" x2="46.97" y2="-53.03"/><line x1="147.48" y1="58.59" x2="41.41" y2="-47.48"/><line x1="141.92" y1="64.14" x2="35.86" y2="-41.92"/><line x1="136.37" y1="69.7" x2="30.3" y2="-36.37"/><line x1="130.81" y1="75.26" x2="24.74" y2="-30.81"/><line x1="125.26" y1="80.81" x2="19.19" y2="-25.26"/><line x1="119.7" y1="86.37" x2="13.63" y2="-19.7"/><line x1="114.14" y1="91.92" x2="8.08" y2="-14.14"/><line x1="108.59" y1="97.48" x2="2.52" y2="-8.59"/><line x1="103.03" y1="103.03" x2="-3.03" y2="-3.03"/><line x1="97.48" y1="108.59" x2="-8.59" y2="2.52"/><line x1="91.92" y1="114.14" x2="-14.14" y2="8.08"/><line x1="86.37" y1="119.7" x2="-19.7" y2="13.63"/><line x1="80.81" y1="125.26" x2="-25.26" y2="19.19"/><line x1="75.26" y1="130.81" x2="-30.81" y2="24.74"/><line x1="69.7" y1="136.37" x2="-36.37" y2="30.3"/><line x1="64.14" y1="141.92" x2="-41.92" y2="35.86"/><line x1="58.59" y1="147.48" x2="-47.48" y2="41.41"/><line x1="53.03" y1="153.03" x2="-53.03" y2="46.97"/></pattern>
        <pattern id="grouped-12512014-2" width="100" height="100" patternUnits="userSpaceOnUse" stroke="#366788" stroke-width="3"><line x1="-53.03" y1="53.03" x2="53.03" y2="-53.03"/><line x1="-47.48" y1="58.59" x2="58.59" y2="-47.48"/><line x1="-41.92" y1="64.14" x2="64.14" y2="-41.92"/><line x1="-36.37" y1="69.7" x2="69.7" y2="-36.37"/><line x1="-30.81" y1="75.26" x2="75.26" y2="-30.81"/><line x1="-25.26" y1="80.81" x2="80.81" y2="-25.26"/><line x1="-19.7" y1="86.37" x2="86.37" y2="-19.7"/><line x1="-14.14" y1="91.92" x2="91.92" y2="-14.14"/><line x1="-8.59" y1="97.48" x2="97.48" y2="-8.59"/><line x1="-3.03" y1="103.03" x2="103.03" y2="-3.03"/><line x1="2.52" y1="108.59" x2="108.59" y2="2.52"/><line x1="8.08" y1="114.14" x2="114.14" y2="8.08"/><line x1="13.63" y1="119.7" x2="119.7" y2="13.63"/><line x1="19.19" y1="125.26" x2="125.26" y2="19.19"/><line x1="24.74" y1="130.81" x2="130.81" y2="24.74"/><line x1="30.3" y1="136.37" x2="136.37" y2="30.3"/><line x1="35.86" y1="141.92" x2="141.92" y2="35.86"/><line x1="41.41" y1="147.48" x2="147.48" y2="41.41"/><line x1="46.97" y1="153.03" x2="153.03" y2="46.97"/></pattern>
        <pattern id="grouped-12512014-3" width="100" height="100" patternUnits="userSpaceOnUse" stroke="#cf8958" stroke-width="3"><line x1="-53.03" y1="53.03" x2="53.03" y2="-53.03"/><line x1="-47.48" y1="58.59" x2="58.59" y2="-47.48"/><line x1="-41.92" y1="64.14" x2="64.14" y2="-41.92"/><line x1="-36.37" y1="69.7" x2="69.7" y2="-36.37"/><line x1="-30.81" y1="75.26" x2="75.26" y2="-30.81"/><line x1="-25.26" y1="80.81" x2="80.81" y2="-25.26"/><line x1="-19.7" y1="86.37" x2="86.37" y2="-19.7"/><line x1="-14.14" y1="91.92" x2="91.92" y2="-14.14"/><line x1="-8.59" y1="97.48" x2="97.48" y2="-8.59"/><line x1="-3.03" y1="103.03" x2="103.03" y2="-3.03"/><line x1="2.52" y1="108.59" x2="108.59" y2="2.52"/><line x1="8.08" y1="114.14" x2="114.14" y2="8.08"/><line x1="13.63" y1="119.7" x2="119.7" y2="13.63"/><line x1="19.19" y1="125.26" x2="125.26" y2="19.19"/><line x1="24.74" y1="130.81" x2="130.81" y2="24.74"/><line x1="30.3" y1="136.37" x2="136.37" y2="30.3"/><line x1="35.86" y1="141.92" x2="141.92" y2="35.86"/><line x1="41.41" y1="147.48" x2="147.48" y2="41.41"/><line x1="46.97" y1="153.03" x2="153.03" y2="46.97"/><line x1="153.03" y1="53.03" x2="46.97" y2="-53.03"/><line x1="147.48" y1="58.59" x2="41.41" y2="-47.48"/><line x1="141.92" y1="64.14" x2="35.86" y2="-41.92"/><line x1="136.37" y1="69.7" x2="30.3" y2="-36.37"/><line x1="130.81" y1="75.26" x2="24.74" y2="-30.81"/><line x1="125.26" y1="80.81" x2="19.19" y2="-25.26"/><line x1="119.7" y1="86.37" x2="13.63" y2="-19.7"/><line x1="114.14" y1="91.92" x2="8.08" y2="-14.14"/><line x1="108.59" y1="97.48" x2="2.52" y2="-8.59"/><line x1="103.03" y1="103.03" x2="-3.03" y2="-3.03"/><line x1="97.48" y1="108.59" x2="-8.59" y2="2.52"/><line x1="91.92" y1="114.14" x2="-14.14" y2="8.08"/><line x1="86.37" y1="119.7" x2="-19.7" y2="13.63"/><line x1="80.81" y1="125.26" x2="-25.26" y2="19.19"/><line x1="75.26" y1="130.81" x2="-30.81" y2="24.74"/><line x1="69.7" y1="136.37" x2="-36.37" y2="30.3"/><line x1="64.14" y1="141.92" x2="-41.92" y2="35.86"/><line x1="58.59" y1="147.48" x2="-47.48" y2="41.41"/><line x1="53.03" y1="153.03" x2="-53.03" y2="46.97"/></pattern>
        <pattern id="grouped-12512014-4" width="100" height="100" patternUnits="userSpaceOnUse" stroke="#cf8958" stroke-width="3"><line x1="-53.03" y1="53.03" x2="53.03" y2="-53.03"/><line x1="-47.48" y1="58.59" x2="58.59" y2="-47.48"/><line x1="-41.92" y1="64.14" x2="64.14" y2="-41.92"/><line x1="-36.37" y1="69.7" x2="69.7" y2="-36.37"/><line x1="-30.81" y1="75.26" x2="75.26" y2="-30.81"/><line x1="-25.26" y1="80.81" x2="80.81" y2="-25.26"/><line x1="-19.7" y1="86.37" x2="86.37" y2="-19.7"/><line x1="-14.14" y1="91.92" x2="91.92" y2="-14.14"/><line x1="-8.59" y1="97.48" x2="97.48" y2="-8.59"/><line x1="-3.03" y1="103.03" x2="103.03" y2="-3.03"/><line x1="2.52" y1="108.59" x2="108.59" y2="2.52"/><line x1="8.08" y1="114.14" x2="114.14" y2="8.08"/><line x1="13.63" y1="119.7" x2="119.7" y2="13.63"/><line x1="19.19" y1="125.26" x2="125.26" y2="19.19"/><line x1="24.74" y1="130.81" x2="130.81" y2="24.74"/><line x1="30.3" y1="136.37" x2="136.37" y2="30.3"/><line x1="35.86" y1="141.92" x2="141.92" y2="35.86"/><line x1="41.41" y1="147.48" x2="147.48" y2="41.41"/><line x1="46.97" y1="153.03" x2="153.03" y2="46.97"/></pattern>
      </defs>`,
      Plot.barY(
        penguins,
        Plot.groupX({y: "count"}, {x: "species", fill: "species", inset: 3})
      ),
      Plot.barY(
        penguins,
        Plot.groupX({y: "count"}, {x: "species", stroke: "currentColor"})
      ),
      Plot.ruleY([0])
    ]
  });
}

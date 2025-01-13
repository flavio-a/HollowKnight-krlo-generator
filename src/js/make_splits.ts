import hksmtemplate from "../../resources/hksm-template.json";
import packagejson from "../../package.json";
import { Options } from "./randomize";

type HKSMSplits = {
  categoryName: string;
  splitIds: Array<string>;
  names: Record<string, string | string[]>;
  endTriggeringAutosplit: boolean;
  gameName: string;
  variables: Record<string, string>;
};

const hksmurl = "https://hksplitmaker.com/?config=";

function makeHKSMJSON(order: Array<string>, options: Options): HKSMSplits {
  const version = packagejson.version;
  let hksmjson: HKSMSplits = structuredClone(hksmtemplate);
  // Splits
  hksmjson.splitIds = Array(order.length).fill("ManualSplit");
  // Split names
  hksmjson.names.ManualSplit = order;
  // Variables
  hksmjson.variables["Krlo generator version"] = packagejson.version;
  hksmjson.variables["Krlo generator difficulty"] =
    options.difficulty.toString();
  hksmjson.variables["Krlo generator grouping factor"] =
    options.groupingFactor.toString();
  return hksmjson;
}

export function makeURLpath(order: Array<string>, options: Options): string {
  const hksmjson = makeHKSMJSON(order, options);
  const condensed = JSON.stringify(hksmjson);
  return hksmurl + btoa(condensed);
}

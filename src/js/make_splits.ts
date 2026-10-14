import hksmtemplate from "../../resources/hksm-template.json";
import packagejson from "../../package.json";
import { Options } from "./randomize";

type HKSMSplits = {
  categoryName: string;
  splitIds: Array<string>;
  names: Record<string, string | string[]>;
  endTriggeringAutosplit: boolean;
  gameName: string;
  variables: {
    "Krlo generator version": string;
    "Krlo generator options": string;
  };
};

type MakeSplitsOptions = {
  categoryName: string;
  splitName: string;
}

const hksmurl = "https://hksplitmaker.com/?config=";

function makeHKSMJSON(order: Array<string>, generatorOptions: Options, splitsOptions: MakeSplitsOptions): HKSMSplits {
  const version = packagejson.version;
  let hksmjson: HKSMSplits = structuredClone(hksmtemplate);
  // Category name
  hksmjson.categoryName = splitsOptions.categoryName;
  // Splits
  hksmjson.splitIds = Array(order.length).fill(splitsOptions.splitName);
  hksmjson.splitIds[62] = "HuntersMark";
  // Split names
  hksmjson.names[splitsOptions.splitName] = order;
  // Variables
  hksmjson.variables["Krlo generator version"] = packagejson.version;
  hksmjson.variables["Krlo generator options"] = JSON.stringify(generatorOptions);
  return hksmjson;
}

export function makeURLpath(order: Array<string>, options: Options, splitsOptions: MakeSplitsOptions): string {
  const hksmjson = makeHKSMJSON(order, options, splitsOptions);
  const condensed = JSON.stringify(hksmjson);
  return hksmurl + btoa(condensed);
}

import { TECHS_MAP } from "@/consts/techs";

export const getTechObjects = (ids: string[]) => {
  return ids.map((id) => TECHS_MAP[id]);
};

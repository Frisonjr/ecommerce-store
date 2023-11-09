import { Billboard } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const url = qs.stringifyUrl({
  url: URL,
  query: {
    limit: 1,
  },
});

const getBillboards = async (): Promise<Billboard[]> => {
  const res = await fetch(`${url}`);

  return res.json();
};

export { getBillboards };

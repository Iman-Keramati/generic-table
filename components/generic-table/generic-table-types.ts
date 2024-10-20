import { ReactNode } from "react";

export interface GenericTableType<T> {
  tableHeadُTitles: string[];
  data: T[];
  cellKeys: ((item: T, index: number) => ReactNode)[];
  renderCell?: (item: T, cellValue: ReactNode, cellIndex: number) => ReactNode;
  spaceBetweenHeadAndBody?: number;
  headerClassName?: string;
  headerCellClassName?: string;
  bodyRowClassName?: string;
  bodyClassName?: string;
  tableClassName?: string;
  bodyCellClassName?: string;
}

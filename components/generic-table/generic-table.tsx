import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { GenericTableType } from "./generic-table-types";

const GenericTable = <T extends object>({
  data,
  tableHeadُTitles,
  cellKeys,
  renderCell,
  spaceBetweenHeadAndBody,
  headerClassName,
  headerCellClassName,
  bodyRowClassName,
  bodyClassName,
  tableClassName,
  bodyCellClassName,
}: GenericTableType<T>) => {
  return (
    <Table
      className={`border-separate lg:border-spacing-y-2 3xl:border-spacing-y-4 ${tableClassName}`}
    >
      {/* Table Header */}
      <TableHeader className={`rounded-3xl bg-primary ${headerClassName}`}>
        <TableRow>
          {tableHeadُTitles.map((title, index) => (
            <TableHead
              key={index}
              className={`text-white text-lg py-4 leading-6 font-bold text-center first:rounded-r-3xl last:rounded-l-3xl ${headerCellClassName}`}
            >
              {title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      {/* Table Body */}
      <TableBody className={bodyClassName}>
        {spaceBetweenHeadAndBody && (
          <TableRow
            style={{ height: spaceBetweenHeadAndBody + "px" }} //add an optional gap between head and body when there is no border-spacing
          ></TableRow>
        )}
        {data.map((item, rowIndex) => (
          <TableRow key={rowIndex} className={`${bodyRowClassName}`}>
            {cellKeys.map((getCellValue, cellIndex) => {
              const cellValue = getCellValue(item, rowIndex);
              return (
                <TableCell
                  key={cellIndex}
                  className={`text-center text-base ${bodyCellClassName}`}
                >
                  {renderCell //add optional custom logic for each cell
                    ? renderCell(item, cellValue, cellIndex)
                    : cellValue}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GenericTable;

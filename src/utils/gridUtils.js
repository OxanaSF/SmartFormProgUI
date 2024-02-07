export const getClassNamesForAllThatApply = (rowIndex, colIndex) => {
  if (rowIndex === 2 && colIndex === 0) return 'thirdRowFirstCol';
  if (rowIndex === 0 && colIndex === 2) return 'firstRowThirdCol';
  if (rowIndex === 8 && (colIndex === 7 || colIndex === 8 || colIndex === 9))
    return 'row10col8To10';

  if (rowIndex === 0 && colIndex === 13) return 'firstRow14Col';
  if (rowIndex === 1 && colIndex === 2) return 'secondRowThirdCol';
  if (rowIndex === 1 && colIndex === 2) return 'secondRowThirdCol';
  if (rowIndex === 2 && colIndex === 2) return 'thirdRowThirdCol';
  if (rowIndex === 10 && colIndex === 2) return 'tenthRowThirdCol';
  if (
    rowIndex === 9 &&
    (colIndex === 10 || colIndex === 11 || colIndex === 12 || colIndex === 13)
  )
    return 'row11col11To14';
  if (rowIndex === 10 && colIndex >= 2) return 'tenthMOreRowThirdCol';
  if (rowIndex > 2 && colIndex === 2) return 'fourthMOreRowThirdCol';
  if (rowIndex === 0 && colIndex > 1) return 'firstRowRestCols';
  if (rowIndex === 1 && colIndex > 1) return 'secondRowRestCols';
  if (rowIndex === 2 && colIndex > 1) return 'thirdRowRestCols';
  if (rowIndex > 2 && colIndex > 1) return 'thirdAndBiggerRowRestCols';
  if ((rowIndex === 0 || rowIndex === 1 || rowIndex === 2) && colIndex === 0)
    return 'firstRowFirstCol';
  if (colIndex === 0) return 'select-all-left-col';
  if (colIndex === 1) return 'select-all-middle-col';

  return 'select-all-right-col';
};

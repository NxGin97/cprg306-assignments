import options from "../week-9/shopping-list/options"
//ex. changes frozen-food (value) to "frozen food" (title) when displayed
export const getCategoryTitle = (value) => {
  const match = options.find((opt) => opt.value === value);

  if (match) return match.title; //ex "household vs household" stays the same

  return value
    .replace(/-/g, " ") //remove hypen ex "frozen-food vs frozen food", change frozen-food to frozen food. 
};
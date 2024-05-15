import { Meal } from "@/lib/meals";
import MealItem from "./MealItem";
import classes from "./MealsGrid.module.css";

interface MealsGridProps {
  meals: Meal[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: any) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;

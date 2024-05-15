import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

const MealsPage = async () => {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1 className="text-5xl font-bold my-7">
          Delicious meals, created{" "}
          <span className={classes.highlight}>By you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;

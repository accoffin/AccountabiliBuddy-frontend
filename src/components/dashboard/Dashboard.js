import React from "react";
import NewGoal from "../newGoal/NewGoal";
import GoalSetting from "../goalSettings/GoalSettings";
import Activities from "../activities/Activities";
import CompletedGoals from "../completedGoal/CompletedGoals";
import Calendar from "../calendar/Calendar"

export default function DashboardFunction({
  selectedGoal,
  user,
  handleReturnToDashboard,
  createGoal,
  goals,
  setGoals,
  manageActivities,
  manageCompletedGoals,
  completedGoals,
  manageCalendar,
}) {
  const renderFunction = () => {
    // conditional renders components based on props
    if (createGoal) {
      return (
        <NewGoal
          user={user}
          setGoals={setGoals}
          handleReturnToDashboard={handleReturnToDashboard}
        />
      );
    } else if (selectedGoal !== null) {
      return (
        <GoalSetting
          goal={selectedGoal}
          user={user}
          goals={goals}
          setGoals={setGoals}
          handleReturnToDashboard={handleReturnToDashboard}
        />
      );
    } else if (manageActivities) {
      return <Activities />;
    } else if (manageCompletedGoals) {
      return <CompletedGoals completedGoals={completedGoals} />;
    } else if (manageCalendar) {
      return <Calendar completedGoals={completedGoals} />;
    } else {
      return <h3>{"Click Hamburger Menu To Begin!"}</h3>;
    }
  };

  return <>{renderFunction()}</>;
}

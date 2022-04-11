/* Measuring a robot

It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.

Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.

For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot. */

function compareRobots(robot1, memory1, robot2, memory2) {
  // Your code here
  // Der turn in runRobot muss irgendwie angezapft werden
  // runRobot(VillageState.random(), routeRobot, mailRoute);
  // runRobot(VillageState.random(), goalOrientedRobot, []);
  const taskRounds = 100;
  let stepsRobot1 = 0;
  let stepsRobot2 = 0;
  for (let round = 0; round < taskRounds; round++) {
    const parcels = VillageState.random();
    stepsRobot1 += runRobot(parcels, robot1, memory1);
    stepsRobot2 += runRobot(parcels, robot2, memory2);
  }
  console.log(`Robot 1 needs ${stepsRobot1/taskRounds} steps in average. \rRobot 2 needs ${stepsRobot2/taskRounds} steps in average.`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
const { User, Result } = require("./db/models");

// async function readUser() {
//   const result = await Result.findAll({
//     include: {
//       model: User,
//       attributes: ["user_name"],
//     },

//     // attributes: ["score_result", "User"],
//     limit: 2,
//   });
//   console.log(result.length);
//   //   console.log(result.sort((a, b) => a.score_result - b.age));
// }
// readUser();

async function readUser(current_id) {
  const result = await Result.sum("score_result", {
    where: { user_ID: current_id },
  });
  const kills = await Result.sum("enemy_kills", {
    where: { user_ID: current_id },
  });
  const time = await Result.sum("time", {
    where: { user_ID: current_id },
  });
  const name = await User.findOne({ where: { id: current_id } });
  console.log(
    `Name: ${name.user_name}\r\nScore: ${result}\r\nKills: ${kills}\r\nTime: ${time}`
  );
  //   console.log(result.sort((a, b) => a.score_result - b.age));
}
readUser(2);
// async function GroupAll() {
//   const result = await Result.findAll({ group: "user_ID" });
//   console.log(result);
// console.log(result.sort((a, b) => a.score_result - b.age));
// }
// GroupAll();

async function firstRole() {
  const users = await User.findAll({
    attributes: ["name"],
    raw: true,
    where: { role_id: 1 },
  });
  console.log(users);
}
async function destroyUser(id) {
  await User.destroy({
    where: {
      id: id,
    },
  });
}
async function changeContent(id_change, newContent) {
  const whereItem = await Role.findOne({ where: { id: id_change } });
  console.log(whereItem);
  whereItem.content = newContent;
  await whereItem.save();
}

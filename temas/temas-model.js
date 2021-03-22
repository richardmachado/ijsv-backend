const db = require("../data/db-config");

module.exports = {
  gettemas,
  findtemasById,
  updatetemas,
  removetemas,
  insert,
};

function gettemas() {
  return db.select("*").from("temas");
}

function findtemasById(id) {
  return db("temas").where({ id });
}

function updatetemas(changes, id) {
  return db("temas")
    .where({ id })
    .update(changes)
    .then((count) => {
      if (count > 0) {
        return findtemasById(id);
      } else {
        return null;
      }
    });
}

function removetemas(id) {
  return db("temas").where("id", id).del();
}
async function insert(temasData) {
  const [id] = await db("temas").insert(temasData, "id");
  return db("temas").where({ id }).first();
}

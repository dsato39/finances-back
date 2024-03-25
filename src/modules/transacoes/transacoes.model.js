import knex from "../../services/knex.js";

export const getAll = (userId) => {
  return knex("transacoes")
    .select(
      "transacoes.*",
      "categories.categoria",
      "categories.tipo as categoria_tipo"
    )
    .leftJoin("categories", "transacoes.categoria_id", "categories.id")
    .where({ "transacoes.user_id": userId });
};

export const get = (id, userId) => {
  return knex("transacoes")
    .select(
      "transacoes.*",
      "categories.categoria",
      "categories.tipo as categoria_tipo"
    )
    .leftJoin("categories", "transacoes.categoria_id", "categories.id")
    .where({ "transacoes.id": id })
    .andWhere({ "transacoes.user_id": userId })
    .first();
};

export const save = (params, userId) => {
  return knex("transacoes").insert(params);
};

export const remove = (id, userId) => {
  return knex("transacoes")
    .delete()
    .where({ id })
    .andWhere({ user_id: userId });
};

export const update = (id, params, userId) => {
  return knex("transacoes")
    .where({ id })
    .andWhere({ user_id: userId })
    .update(params);
};

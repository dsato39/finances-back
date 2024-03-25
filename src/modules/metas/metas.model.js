import knex from "../../services/knex.js";

export const getAll = (userId) => {
  return knex("metas").select("*").where({ user_id: userId });
};

export const get = (id, userId) => {
  return knex("metas")
    .where({ id })
    .andWhere({ user_id: userId })
    .select("*")
    .first();
};

export const save = (params, userId) => {
  return knex("metas").insert(params);
};

export const remove = (id, userId) => {
  return knex("metas").delete().where({ id }).andWhere({ user_id: userId });
};

export const update = (id, params, userId) => {
  return knex("metas")
    .where({ id })
    .andWhere({ user_id: userId })
    .update(params);
};

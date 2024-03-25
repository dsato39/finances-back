import knex from "../../services/knex.js";

export const getAll = (userId) => {
  return knex("categories").select("*").where({ user_id: userId });
};

export const get = (id, userId) => {
  return knex("categories")
    .where({ id })
    .andWhere({ user_id: userId })
    .select("*")
    .first();
};

export const save = (params, userId) => {
  return knex("categories").insert(params);
};

export const remove = (id, userId) => {
  return knex("categories")
    .delete()
    .where({ id })
    .andWhere({ user_id: userId });
};

export const update = (id, params, userId) => {
  return knex("categories")
    .where({ id })
    .andWhere({ user_id: userId })
    .update(params);
};

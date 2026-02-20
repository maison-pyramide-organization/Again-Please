import { AnyAaaaRecord } from "node:dns";
import client from "../contentful";

export const getForce = async () => {
  const { items } = await client.getEntries({
    content_type: "teamMember",
    limit: 100,
  });

  const members = items.map(({ fields, sys }) => ({
    ...fields,
    id: sys.id,
    // createdAt: sys.createdAt, // ISO8601 UTC
    modifiedAt: sys.updatedAt, // ISO8601 UTC
  }));

  return members;
};

export const getSectors = async () => {
  const { items } = await client.getEntries({
    content_type: "sector",
    limit: 100,
  });

  const sectors = items.map(({ fields, sys }) => ({
    ...fields,
    id: sys.id,
    // createdAt: sys.createdAt, // ISO8601 UTC
    modifiedAt: sys.updatedAt, // ISO8601 UTC
  }));

  return sectors;
};

export const getEvent = async () => {
  const { items } = await client.getEntries({
    content_type: "event",
    limit: 100,
  });

  const events = items.map(({ fields, sys }) => ({
    ...fields,
    id: sys.id,
    // createdAt: sys.createdAt, // ISO8601 UTC
    modifiedAt: sys.updatedAt, // ISO8601 UTC
  }));

  return events;
};

export const getArticles = async () => {
  const { items } = await client.getEntries({
    content_type: "article",
    limit: 100,
  });

  const articles = items.map(({ fields, sys }) => ({
    ...fields,
    id: sys.id,
    // createdAt: sys.createdAt, // ISO8601 UTC
    modifiedAt: sys.updatedAt, // ISO8601 UTC
  }));

  const grouped = articles.reduce(
    (acc: any, item: any) => {
      const firstType = item.type?.[0]?.toLowerCase();

      if (firstType === "event") {
        acc.events.push(item);
      } else if (firstType === "press") {
        acc.press.push(item);
      } else if (firstType === "blog") {
        acc.blogs.push(item);
      }

      return acc;
    },
    { events: [], press: [], blogs: [] },
  );

  return grouped;
};

export const getBlogs = async () => {
  const { items } = await client.getEntries({
    content_type: "blog",
    limit: 100,
  });

  const blogs = items.map(({ fields, sys }) => ({
    ...fields,
    id: sys.id,
    // createdAt: sys.createdAt, // ISO8601 UTC
    // modifiedAt: sys.updatedAt, // ISO8601 UTC
  }));

  return blogs;
};

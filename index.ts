import { MikroORM, RequestContext } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { __prod__ } from "./src/constants";
import mikroConfig from "./src/mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  await RequestContext.createAsync(orm.em, async () => {
    const post = orm.em.create(Post, { title: "My first post!" } as Post);
    await orm.em.persistAndFlush(post);
  });
};

main().catch((err) => {
  console.log(err);
});

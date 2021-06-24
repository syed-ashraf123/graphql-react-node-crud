const Post = require("./Post");
const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAllPosts: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      // console.log(parent, args, context, info);
      const { title, description } = args.post;
      const post = await new Post({ title, description }).save();
      return post;
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Deleted";
    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return post;
    },
  },
};
module.exports = resolvers;

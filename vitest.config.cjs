module.exports = {
  test: {
    environment: "jsdom",
    pool: "forks",
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
  },
};

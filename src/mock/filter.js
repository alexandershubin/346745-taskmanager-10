const filterNames = [`all`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];

/**
 *
 * @return {{name: *, count: *}[]}
 */
const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10),
    };
  });
};

export {generateFilters};

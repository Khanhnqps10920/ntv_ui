export const getCategory = state => categorySlug => {
  const category = state.categories.find(category => category.code === categorySlug);
  return category;
}

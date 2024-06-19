export const getSearchQuery = (pathname: string) => {
  const routes = pathname.split('/');
  const isSearches = pathname.includes('searches');
  return isSearches ? routes[routes.length - 1] : '';
};

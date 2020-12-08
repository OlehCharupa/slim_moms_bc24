export const isLogin = () => true; //когда будет готова логика для авторизации, поместить ее сюда, или удалить, заменив в PrivateRoutes, PublicRoutes, Navigation.
export const userIdSelector = (state) => state.user.id;
export const userTokenSelector = (state) => state.token;
export const notAllowedProducts = (state) =>
  state.DailyCaloriesFormInfo.notAllowedProducts;
export const dailyRate = (state) => state.DailyCaloriesFormInfo.dailyRate;
export const errorRequest = (state) => state.errorRequest;

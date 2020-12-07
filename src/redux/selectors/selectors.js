export const isLogin = () => true; //когда будет готова логика для авторизации, поместить ее сюда, или удалить, заменив в PrivateRoutes, PublicRoutes, Navigation.
export const userIdSelector = (state) => state.user.id;
export const userTokenSelector = (state) => state.token;

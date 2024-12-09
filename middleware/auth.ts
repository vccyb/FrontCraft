export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth();

  console.log("auth", auth);
  console.log(auth.status.value);
  // 如果路由需要认证且用户未登录，重定向到登录页
  if (auth.status.value !== "authenticated" && to.path !== "/login") {
    return navigateTo("/login");
  }
});

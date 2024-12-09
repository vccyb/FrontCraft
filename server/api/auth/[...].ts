import GithubProvider from "next-auth/providers/github";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: "your-secret-here",
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: "Ov23liI7r3aIQCBXg8gP",
      clientSecret: "4511f240cf8a942c20de5e3cb0d6f48d00965090",
    }),
  ],
});

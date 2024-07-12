// extend les classes par default de next-auth car dans autoptions, on rajouter la propriété id a l'objet session
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultUser & {
      id: string;
    };
  }
}

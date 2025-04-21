import { RecoilRoot, RecoilRootProps } from "recoil";

export function RecoilProvider({ children }: RecoilRootProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

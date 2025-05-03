import * as React from "react";

export interface IProfileProps {}

export default function Profile(props: IProfileProps) {
  return (
    <main className="profile">
      <section className="profile__header">
        <div className="profile__image">
          <img src="" alt="" />
        </div>
        <div className="profile__username">
          <p>UserName</p>
        </div>
      </section>

      <section className="profile__content"></section>
    </main>
  );
}

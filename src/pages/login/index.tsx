import { FormEvent, useState } from "react";
import "../../styles/form.css";
import "./login.css";
import InputField from "../../components/InputField";

export default function Login() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {};

  return (
    <main>
      <div className="container">
        <h2 className="container__title">Create your profile</h2>
        <div className="form-container">
          <form
            action="#"
            className="form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form__input">
              <InputField
                name="name"
                label="name"
                placeholder="full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength={3}
                maxLength={80}
                required
              />
            </div>

            <div className="form__input">
              <InputField
                name="username"
                label="username"
                placeholder="public username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength={4}
                maxLength={36}
                required
              />
            </div>

            <div className="form__input">
              <InputField
                name="email"
                label="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
              />
            </div>

            <div className="form__input">
              <InputField
                name="password"
                label="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                maxLength={50}
                required
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

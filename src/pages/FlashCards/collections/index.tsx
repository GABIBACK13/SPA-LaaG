import { FormEvent, useState } from "react";
import "./collections.css";
import "../../../styles/form.css";
import { Add } from "@mui/icons-material";
import InputField from "../../../components/InputField";

export default function Collections() {
  const collectionId = false;
  const [title, setTitle] = useState("");
  const [tagText, setTagText] = useState("");

  const handleAddCollection = (e: FormEvent) => {
    e.preventDefault();
    alert(title);
  };

  const handleAddTag = () => {};

  return (
    <main>
      <div className="main_container">
        <form
          action="#"
          method="post"
          className="form"
          onSubmit={(e) => {
            handleAddCollection(e);
          }}
        >
          <div className="form__group">
            <div className="form__input">
              <InputField
                name="title"
                label="Title"
                placeholder="Collection's title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                minLength={4}
                maxLength={50}
                required
              />

              <label htmlFor="private">
                <input type="checkbox" name="private" id="private" />
                Private
              </label>
            </div>

            <div className="form__input">
              <InputField
                type="text"
                name="tags"
                id="tags"
                aria-label="collection's tags"
                placeholder="add the collection's tags here        ''ex: math''"
                minLength={2}
                maxLength={16}
                value={tagText}
                onChange={(e) => setTagText(e.target.value)}
              />
              <button type={"button"} onClick={() => handleAddTag()}>
                <Add />
              </button>
            </div>
          </div>

          <button type="submit" title="add tag" aria-label="add tag">
            {collectionId ? "update" : "add"} collection
          </button>
        </form>
      </div>
    </main>
  );
}

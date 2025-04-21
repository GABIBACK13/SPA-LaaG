import "./collections.css";
import { Add } from "@mui/icons-material";

export default function Collections() {
  const collectionId = false;
  const handleAddCollection = () => {};
  const handleAddTag = () => {};

  return (
    <main>
      <div className="add-collection">
        <form action="#" method="post" className="add-collection__form">
          <div className="add-collection__group">
            <div className="add-collection__input">
              <input
                type="text"
                name="title"
                id="title"
                aria-label="collection's title"
                placeholder="collection's title"
                minLength={4}
                maxLength={50}
                required
              />
              <label htmlFor="private">
                <input type="checkbox" name="private" id="private" />
                Private
              </label>
            </div>
            <div className="add-collection__input">
              <input
                type="text"
                name="tags"
                id="tags"
                aria-label="collection's tags"
                placeholder="add the collection's tags here        ''ex: math''"
                minLength={2}
                maxLength={16}
              />
              <button onClick={() => handleAddTag()}>
                <Add />
              </button>
            </div>
          </div>
          <button>{collectionId ? "update" : "add"} collection</button>
        </form>
      </div>

      <div className="container">
        <button
          onClick={() => {
            handleAddCollection();
          }}
        >
          Add collection
        </button>
      </div>
    </main>
  );
}

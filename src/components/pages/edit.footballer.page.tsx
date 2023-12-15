import { EditFootballer } from '../edit.footballer/edit.footballer';

export default function EditFootballerPage() {
  return (
    <section className="edit-section">
      <div className="main-edit-container">
        <h1 className="title-login-page">Edit Footballer</h1>
        {<EditFootballer></EditFootballer>}
      </div>
    </section>
  );
}

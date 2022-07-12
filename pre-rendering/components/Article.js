export const Article = ({ id, title, description }) => (
  <div key={id}>
    <h2>
      {id}. {title}
    </h2>
    <p>{description}</p>
    <hr />
  </div>
);

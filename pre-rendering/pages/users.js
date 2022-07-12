import User from "../components/user";

export default function UserList({ users }) {
  return (
    <>
      <h1>List Of Users</h1>
      {users.map(({id,name,email}) => {
        return (
          <div key={id}>
            <User name={name} email={email} />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

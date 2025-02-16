import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
// import PostList from "./pages/posts/postlists.tsx";
import AuthorList from "./pages/authors/AuthorList.tsx";


export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    /> 
    {/* <Resource
      name="Posts"
      list={PostList}
      edit={EditGuesser}
      show={ShowGuesser}
    /> */}
    <Resource
      name="authors"
      list={AuthorList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
//   <Admin dataProvider={dataProvider}>
//   <Resource name="users" list={AuthorList} />
// </Admin>
  
);


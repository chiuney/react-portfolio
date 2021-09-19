import { Router } from "./components/router/Router";

const user = {
  image: 'https://source.unsplash.com/NodtnCsLdTE',
  name: 'chiuney',
  email: 'xxx@gmail.com',
  phone: '080-0000-0000',
  company: {
    name: 'React株式会社'
  },
  website: 'https://google.com'
}
// mapでダミーデータを作成 => 32.Pageの作成を参照
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;

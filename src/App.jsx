import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./page/MainPage";
import PageTitle from "./components/PageTitle";
import NotFoundPage from "./page/NotFoundPage";
import SuccessPage from "./page/SuccessPage";

function Layout({ children }) {
  const location = useLocation();
  const isNotFound = location.pathname === "/404" || location.pathname === "*";

  return (
    <div className="flex flex-col min-h-screen">
      {!isNotFound && <Header />}
      <div className="w-full max-w-[1440px] mx-auto flex-grow">
        <div className="flex-grow flex justify-center">
          <div className="w-full max-w-[1440px]">{children}</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const handleNewWindowRedirect = (url) => {
    window.open(url, "_blank"); // Open in a new tab/window
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageTitle title="Home" />
                <MainPage />
                <button onClick={() => handleNewWindowRedirect('/success')}>
                  Go to Success Page in New Window
                </button>
              </>
            }
          />
          <Route
            path="/success"
            element={<SuccessPage />}
          />
          <Route
            path="*"
            element={
              <>
                <PageTitle title="404 | Page Not Found" />
                <NotFoundPage />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import Header from "./components/Header";
//   import MainPage from "./page/MainPage";
// import PageTitle from "./components/PageTitle";
// import NotFoundPage from "./page/NotFoundPage";
// import SuccessPage from "./page/SuccessPage";

// function Layout({ children }) {
//   const location = useLocation();
//   const isNotFound = location.pathname === "/404" || location.pathname === "*";

//   return (
//     <div className="flex flex-col min-h-screen">
//       {!isNotFound && <Header />}
//       <div className="w-full max-w-[1440px] mx-auto flex-grow">
//         <div className="flex-grow flex justify-center">
//           <div className="w-full max-w-[1440px]">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <PageTitle title="Home" />
//                 <MainPage />
//               </>
//             }
//           />
//           <Route 
//             path="/success" 
//             element={<SuccessPage />} />
//           <Route
//             path="*"
//             element={
//               <>
//                 <PageTitle title="404 | Page Not Found" />
//                 <NotFoundPage />
//               </>
//             }
//           />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProctedRoute from "./components/ProctedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctors from "./pages/ApplyDoctors";
import NotificationPage from "./pages/NotificationPage";
import User from "./pages/admin/User";
import Doctors from "./pages/admin/Doctors";
import Profile from "./pages/doctor/Profile";
import BookingPage from "./pages/BookingPage";
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProctedRoute>
                  <Home />
                </ProctedRoute>
              }
            />

            <Route
              path="/apply-doctor"
              element={
                <ProctedRoute>
                  <ApplyDoctors />
                </ProctedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProctedRoute>
                  <User />
                </ProctedRoute>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProctedRoute>
                  <Doctors />
                </ProctedRoute>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProctedRoute>
                  <Profile />
                </ProctedRoute>
              }
            />
            <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProctedRoute>
                  <BookingPage />
                </ProctedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProctedRoute>
                  <NotificationPage />
                </ProctedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;

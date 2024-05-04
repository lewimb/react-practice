import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DigimonListPage from "./pages/Digimon";
import DigimonDetailPage from "./pages/DigimonDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout /> /**Component diregister sbg jsx */,

		// untuk tampilin halaman di dlm layout, jgn lupa pake component Outlet di dlm component layoutnya
		children: [
			{
				// untuk children ga perlu pake / di depan urlnya. cth: "dashboard/main" bukan "/dashboard/main"
				path: "",
				element: <Home />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "digimons",

				children: [
					{
						path: "",
						element: <DigimonListPage />,
					},
					{
						path: ":name",
						element: <DigimonDetailPage />,
					},
				],
			},
		],
	},
]);

export default router;

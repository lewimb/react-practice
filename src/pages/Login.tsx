import { useNavigate } from "react-router-dom";

export default function Login() {
	// ini hooks yg dipake untuk pindah halaman secara programmatic / lewat javascript
	const navigate = useNavigate();

	function navigateHome() {
		navigate("/");
	}
	return (
		<div>
			Login Page
			<button
				onClick={navigateHome}
				className="btn uppercase btn-outline btn-success"
			>
				to home page
			</button>
		</div>
	);
}

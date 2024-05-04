import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Digimon = {
	name: string;
	img: string;
	level: string;
};

export default function Home() {
	/**
	 * useState :
	 * - parameter -> initial state / state awal
	 * - return -> array yg isinya variable state (index 0), function utk ngubah statenya (index 1)
	 *
	 * perubahan value state melalui set functionnya akan mentrigger rerender utk component yg bersangkutan
	 */
	const [digimons, setDigimons] = useState<Digimon[]>([]);
	const [doFetch, setDoFetch] = useState<boolean>(false);

	async function fetchDigimon() {
		try {
			const res = await fetch("https://digimon-api.vercel.app/api/digimon");
			const data = await res.json();

			if (!res.ok) throw new Error(data);

			setDigimons(data.slice(0, 10));
		} catch (error) {
			console.log(error);
		}
	}

	/**
	 * useEffect terima 2 parameter :
	 * - callback function
	 * - dependency array
	 *
	 * callback functionnya :
	 * - ga boleh dijadiin async function -> ga bisa pake await, kalo mau pake then catch
	 * - kalo ada subscription -> return function untuk men-unsubscribe dr subscription
	 *
	 * dependency array :
	 * - kalo ga ada -> cb function bakal dipanggil terus di tiap rendernya
	 * - kalo [] -> cb function cuma dijalanin sekali
	 */
	useEffect(() => {
		if (doFetch) {
			fetchDigimon();
		} else {
			setDigimons([]);
		}
	}, [doFetch]);

	return (
		<div className="p-8">
			<div className="grid grid-cols-4">
				{/* pelajarin juga method array .filter(), .reduce() */}
				{digimons.map((digimon) => (
					<div className="card w-96 bg-base-100 shadow-xl" key={digimon.name}>
						<figure>
							<img src={digimon.img} alt={digimon.name} />
						</figure>
						<div className="card-body">
							<h2 className="card-title">{digimon.name}</h2>
							<p>{digimon.level}</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">See detail</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex gap-2 items-center">
				<button
					className="btn btn-ghost btn-primary"
					onClick={() => {
						setDoFetch(!doFetch);
					}}
				>
					Toggle fetch
				</button>

				{/* dipake untuk pindah route url dalam SPA secara component */}
				<Link to="/login">to login page</Link>
			</div>
		</div>
	);
}

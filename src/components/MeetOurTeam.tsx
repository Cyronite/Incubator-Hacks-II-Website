import { useEffect, useState } from "react";
import cartImg from "../assets/cart.png";
import wheelImg from "../assets/wheel.png";

const teamMembers = [
	{ name: "Alice", role: "Designer", img: "/pfp1.jpg" },
	{ name: "Bob", role: "Developer", img: "/pfp2.jpg" },
	{ name: "Charlie", role: "Product Manager", img: "/pfp3.jpg" },
	{ name: "Dana", role: "QA Engineer", img: "/pfp4.jpg" },
	{ name: "Eli", role: "DevOps", img: "/pfp5.jpg" },
	{ name: "Fiona", role: "UX Researcher", img: "/pfp6.jpg" },
	{ name: "George", role: "Scrum Master", img: "/pfp7.jpg" },
	{ name: "Hannah", role: "Engineer", img: "/pfp8.jpg" },
	{ name: "Ian", role: "Analyst", img: "/pfp9.jpg" },
	{ name: "Jill", role: "Content Strategist", img: "/pfp10.jpg" },
];

const WAGON_WIDTH = 260; // cart + margins

export default function MeetOurTeam() {
	const [visibleWagons, setVisibleWagons] = useState(10);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		const screenWidth = window.innerWidth;
		const wagonsPerRow = Math.ceil((screenWidth * 2) / WAGON_WIDTH);
		setVisibleWagons(wagonsPerRow);
	}, []);

	const allWagons = Array.from({ length: visibleWagons }, (_, i) => {
		const group = teamMembers.slice(i * 3, i * 3 + 3);
		if (group.length < 3) {
			group.push(...teamMembers.slice(0, 3 - group.length));
		}

		return (
			<div
				key={i}
				className="relative flex flex-col items-center w-[340px] h-[200px] justify-end mx-8"
			>
				{/* Profile Circles on top */}
				<div className="flex w-full justify-between px-10 mb-[-36px]">
					{group.map((member, j) => (
						<div
							key={j}
							className="relative group flex flex-col items-center"
						>
							<img
								src={member.img}
								alt={member.name}
								className="h-28 w-20 object-cover border-2 border-white"
								style={{
									borderRadius: "60% 60% 50% 50% / 80% 80% 60% 60%",
								}}
							/>
							<div className="absolute top-[-2.5rem] left-1/2 z-20 w-max -translate-x-1/2 scale-0 transform whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 shadow-md transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
								<div className="font-bold">{member.name}</div>
								<div>{member.role}</div>
							</div>
						</div>
					))}
				</div>
				{/* Cart Image below */}
				<div className="relative w-full flex justify-center items-end group/wagon">
					<img
						src={cartImg}
						alt="Cart"
						className="w-[400px] h-auto z-0"
						style={{ objectFit: "contain" }}
					/>
					{/* Wheels */}
					<img
						src={wheelImg}
						alt="Wheel"
						className={`absolute left-[40px] bottom-[-32px] w-[72px] h-[72px] animate-spin-slow z-20${
							paused ? " paused-spin" : ""
						}`}
						style={{ objectFit: "contain" }}
						data-wheel
					/>
					<img
						src={wheelImg}
						alt="Wheel"
						className={`absolute right-[40px] bottom-[-32px] w-[72px] h-[72px] animate-spin-slow z-20${
							paused ? " paused-spin" : ""
						}`}
						style={{ objectFit: "contain" }}
						data-wheel
					/>
				</div>
			</div>
		);
	});

	return (
		<div
			className="relative w-full overflow-hidden bg-gradient-to-b from-[#ffeb9c] to-white pt-10"
			style={{ scrollBehavior: "smooth" }}
		>
			<h2 className="modak text-5xl md:text-6xl text-[#222] mb-8 text-center w-full">
				THE TEAM
			</h2>
			<div
				className={`flex w-max animate-scroll${
					paused ? " paused-scroll" : ""
				}`}
				id="cart-scroll"
				onMouseEnter={() => setPaused(true)}
				onMouseLeave={() => setPaused(false)}
			>
				{allWagons}
			</div>

			<style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .paused-scroll {
          animation-play-state: paused !important;
        }
        .animate-spin-slow {
          animation: spin-reverse 2s linear infinite;
        }
        .paused-spin {
          animation-play-state: paused !important;
        }
        @keyframes spin-reverse {
          100% {
            transform: rotate(-360deg);
          }
        }
      `}</style>
			{/* Brown rectangle below carts */}
			<div
				className="w-full h-8 bg-[#a9744f] mt-2 rounded-t-sm"
				style={{
					zIndex: 0,
					pointerEvents: "none",
				}}
			/>
		</div>
	);
}

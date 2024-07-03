export default function Layout({ children }) {
	return (
		<div className="w-screen h-screen flex items-center justify-center">
			<div className="w-full h-full max-w-[393px] p-5 bg-black flex flex-col items-center justify-end">
				{children}
				<ul className="w-full h-[65px] flex items-center justify-between">
					<li className="px-6 py-2.5 rounded-3xl bg-white">HOME</li>
					<li className="px-6 py-2.5 rounded-3xl text-white">LIST</li>
					<li className="px-6 py-2.5 rounded-3xl text-white">WHIS</li>
					<li className="px-6 py-2.5 rounded-3xl text-white">MY</li>
				</ul>
			</div>
		</div>
	);
}

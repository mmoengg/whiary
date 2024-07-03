import Image from 'next/image';

export default function Recommend() {
	return (
		<div className="w-full h-full max-h-[300px] rounded-2xl bg-primary flex flex-col gap-8">
			<div className="px-6 pt-6 h-[calc(10%)] text-xs flex gap-2">
				<div>O </div>
				<div>17 Feb 2024</div>
			</div>
			<div className="mx-6 h-[calc(80%)] pb-3 border border-black border-x-0 border-t-0 flex items-center justify-between gap-3">
				<div className="h-full  flex flex-1 flex-col items-start justify-between">
					<h1 className="text-[28px] font-extrabold leading-8">The Dalmore</h1>
					<div className="cursor-pointer w-[35px] h-[35px] rounded-full bg-black flex items-center justify-center">
						<Image
							src="/images/svg/i-arr-diagonal.svg"
							alt="profile"
							width={12}
							height={12}
						></Image>
					</div>
					{/* <div>
						<Image
							scr="/images/svg/i-arr-diagonal.svg"
							alt=""
							width={35}
							height={35}
							className="bg-black rounded-full"
						></Image>
					</div> */}
				</div>
				<div className="flex-1">
					<Image
						scr="/images/svg/i-arr-diagonal.svg"
						alt="profile"
						width={160}
						height={160}
						className="rounded-2xl bg-white"
					/>
				</div>
			</div>
			<ul className="px-6 pb-2 h-[calc(10%)] flex text-sm gap-5">
				<li>#singlemalt</li>
				<li>#highland</li>
				<li>#highland</li>
			</ul>
		</div>
	);
}

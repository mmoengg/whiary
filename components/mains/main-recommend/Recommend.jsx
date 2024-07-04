import Image from 'next/image';

export default function Recommend() {
	return (
		<div className="w-full h-full max-h-[calc(50%)] rounded-2xl bg-primary flex flex-col justify-between gap-4">
			<div className="px-4 pt-4 text-xs flex gap-2">
				<div>O </div>
				<div>17 Feb 2024</div>
			</div>
			<div className="mx-4 h-full pb-4 border border-black border-x-0 border-t-0 flex items-center justify-between gap-10">
				<div className="w-1/3 h-full  flex flex-col items-start justify-between">
					<h1 className="text-[28px] font-extrabold leading-8">
						The
						<br /> Dalmore
					</h1>
					<div className="cursor-pointer w-[35px] h-[35px] rounded-full bg-black flex items-center justify-center">
						<Image src="/images/svg/i-arr-diagonal.svg" alt="profile" width={12} height={12}></Image>
					</div>
				</div>
				<div className="w-2/3 h-full flex-1">
					<div className="w-full h-full bg-white rounded-2xl"></div>
				</div>
			</div>
			<ul className="px-4 pb-2 flex text-sm gap-5">
				<li>#singlemalt</li>
				<li>#highland</li>
				<li>#highland</li>
			</ul>
		</div>
	);
}

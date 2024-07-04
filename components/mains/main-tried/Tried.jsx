import Image from 'next/image';

export default function Tried() {
	return (
		<div className="p-4 w-full h-full max-h-[calc(40%)] rounded-2xl bg-secondary flex flex-col gap-3">
			<div className="text-sm">i`ve tried it</div>
			<ul className="h-full max-h-[calc(100%-30px)] flex flex-col gap-2 overflow-y-auto">
				<li className=" flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Image src="/images/svg/i-plus.svg" width={40} height={40} alt="" className="rounded-2xl bg-white" />
						<p className="text-xs">Talisker</p>
					</div>
					<div className="w-[35px] h-[35px] text-secondary-900 text-xs border border-secondary-900 rounded-full flex items-center justify-center">5</div>
				</li>
				<li className=" flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Image src="/images/svg/i-plus.svg" width={40} height={40} alt="" className="rounded-2xl bg-white" />
						<p className="text-xs">Talisker</p>
					</div>
					<div className="w-[35px] h-[35px] text-secondary-900 text-xs border border-secondary-900 rounded-full flex items-center justify-center">5</div>
				</li>
				<li className=" flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Image src="/images/svg/i-plus.svg" width={40} height={40} alt="" className="rounded-2xl bg-white" />
						<p className="text-xs">Talisker</p>
					</div>
					<div className="w-[35px] h-[35px] text-secondary-900 text-xs border border-secondary-900 rounded-full flex items-center justify-center">5</div>
				</li>
				<li className=" flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Image src="/images/svg/i-plus.svg" width={40} height={40} alt="" className="rounded-2xl bg-white" />
						<p className="text-xs">Talisker</p>
					</div>
					<div className="w-[35px] h-[35px] text-secondary-900 text-xs border border-secondary-900 rounded-full flex items-center justify-center">5</div>
				</li>
				<li className=" flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Image src="/images/svg/i-plus.svg" width={40} height={40} alt="" className="rounded-2xl bg-white" />
						<p className="text-xs">Talisker</p>
					</div>
					<div className="w-[35px] h-[35px] text-secondary-900 text-xs border border-secondary-900 rounded-full flex items-center justify-center">5</div>
				</li>
			</ul>
		</div>
	);
}

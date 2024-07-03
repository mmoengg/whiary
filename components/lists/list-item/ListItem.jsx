import Image from 'next/image';

export default function ListItem() {
	return (
		<div className="w-full h-28 p-6 rounded-2xl bg-white flex items-center justify-between">
			<div>
				<Image src="/images/svg/i-list.svg" width={22} height={22} alt="list" />
			</div>
			<div>talisker</div>
		</div>
	);
}

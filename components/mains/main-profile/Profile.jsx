import Image from 'next/image';

export default function Profile() {
	return (
		<div className="p-5 pb-0 w-full flex items-center justify-between">
			<div className="text-white">
				<p>Hi 🖐️ Moeng!</p>
				<p>Welcome back</p>
			</div>
			<div>
				<Image src="/images/sik111.png" alt="profile" width={56} height={56} className="rounded-full" />
			</div>
		</div>
	);
}

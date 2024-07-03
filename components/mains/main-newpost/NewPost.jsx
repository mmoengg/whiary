import Image from 'next/image';

export default function NewPost() {
	return (
		<div className="px-6 py-3 w-full h-full max-h-[70px] rounded-2xl bg-white flex items-center justify-between">
			<div className="text-xs">
				<p className="font-bold">New post</p>
				<p>오늘 즐긴 위스키 기록하기</p>
			</div>
			<div className="cursor-pointer w-[35px] h-[35px] rounded-full bg-black flex items-center justify-center">
				<Image src="/images/svg/i-plus.svg" alt="profile" width={10} height={10}></Image>
			</div>
		</div>
	);
}

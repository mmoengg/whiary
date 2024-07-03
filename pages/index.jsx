import Profile from '@/components/mains/main-profile/Profile';
import MainContainer from '@/components/mains/MainContainer';

export default function Home() {
	return (
		<div className="w-full h-[calc(100%-65px)] flex flex-col items-start justify-start gap-5">
			<Profile />
			<MainContainer />
		</div>
	);
}

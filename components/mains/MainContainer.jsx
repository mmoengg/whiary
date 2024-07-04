import NewPost from './main-newpost/NewPost';
import Recommend from './main-recommend/Recommend';
import Tried from './main-tried/Tried';

export default function MainContainer() {
	return (
		<div className="p-5 pb-0 w-full h-full max-h-[calc(100%-77px)] flex flex-col justify-end gap-2">
			<Recommend />
			<NewPost />
			<Tried />
		</div>
	);
}

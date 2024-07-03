import NewPost from './main-newpost/NewPost';
import Recommend from './main-recommend/Recommend';
import Tried from './main-tried/Tried';

export default function MainContainer() {
	return (
		<div className="w-full h-full flex flex-col justify-end gap-3">
			<Recommend />
			<NewPost />
			<Tried />
		</div>
	);
}

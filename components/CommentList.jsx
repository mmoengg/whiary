import { useEffect, useState } from 'react';

export default function CommentList() {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		async function fetchComments() {
			const res = await fetch('/api/whiskey-list/list');
			const data = await res.json();
			console.log('data:', data);
			setComments(data.list);
		}
		fetchComments();
	}, []);

	return (
		<div>
			<h2>Comments</h2>
			<ul>
				{comments.map(comment => (
					<li key={comment._id} className="text-white">
						{comment.name}
					</li>
				))}
			</ul>
		</div>
	);
}

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ListItem() {
	const [whiskeyList, setWhiskeyList] = useState([]);

	useEffect(() => {
		async function fetchWhiskeyList() {
			const res = await fetch('/api/whiskey-list/list');
			const data = await res.json();
			console.log('data:', data);
			setWhiskeyList(data.list);
		}
		fetchWhiskeyList();
	}, []);

	return (
		<div className="w-full h-full overflow-y-auto flex flex-col gap-2">
			{whiskeyList.length > 0 &&
				whiskeyList.map((whiskey, index) => {
					return (
						<div key={whiskey._id} className="w-full min-h-24 p-6 rounded-2xl bg-white flex items-center justify-between hover:bg-stone-500 hover:text-white cursor-pointer">
							<div>
								<Image src={whiskey.imageUrl} width={50} height={50} alt="list" />
							</div>
							<div>{whiskey.nameEn}</div>
						</div>
					);
				})}
		</div>
	);
}

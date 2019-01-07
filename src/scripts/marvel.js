import axios from 'axios';

const URL = 'https://gateway.marvel.com:443/v1/public/';
const publicKey = 'c7f22a4f0dc5beafc75098a2543630dc';
const privateKey = '1ab8c9390deef39b307e1145409ac57edcfabe3b';

export default {
	getAllComics: (limit, callback) => {
		const urlComics = URL + 'comics?apikey=' + publicKey + '&limit=' + limit;
		axios.get(urlComics).then(comics => {
			if(callback) {
				callback(comics);
			}
		});
	}
};
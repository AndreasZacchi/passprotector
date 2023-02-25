import { Admin, Record } from 'pocketbase';

import * as CryptoJS from 'crypto-js';

export const serializeNonPOJOS = (obj: Record | Admin | null) => {
	return structuredClone(obj);
};

export const generatePassword = (secret: string) => {
	var chars = [
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
		'0123456789',
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	];
	function randInt(this_max: number) {
		let umax = Math.pow(2, 32);
		let max = umax - (umax % this_max);
		let r = new Uint32Array(1);
		do {
			crypto.getRandomValues(r);
		} while (r[0] > max);
		return r[0] % this_max;
	}

	let password = [
		[9, 4, 3]
			.map(function (len, i) {
				return new Array(len)
					.fill(chars[i])
					.map((x) =>
						(function (chars) {
							let umax = Math.pow(2, 32),
								r = new Uint32Array(1),
								max = umax - (umax % chars.length);
							do {
								crypto.getRandomValues(r);
							} while (r[0] > max);
							return chars[r[0] % chars.length];
						})(x)
					)
					.join('');
			})
			.join('')
	].map((s) => {
		let arr = s.split('');
		for (let i = 0, n = arr.length; i < n - 2; i++) {
			let j = randInt(n - i);
			[arr[j], arr[i]] = [arr[i], arr[j]];
		}
		return arr.join('');
	})[0];
	return CryptoJS.AES.encrypt(password, secret).toString();
};

export const getPassword = (password: string, secret: string) => {
	return CryptoJS.AES.decrypt(password, secret).toString(CryptoJS.enc.Utf8);
};

export const passwordStrength = (password: string) => {
	return password.length;
};

export const averagePasswordStrength = (passwords: [website:string, password: string] | undefined) => {

	//Password Strengths
	let great = 20;
	let good = 15;
	let bad = 10;
	//Everything under bad is terrible

	let strength: string;

	let sumPasswordLength = 0;
	let sumPasswordStrength = 0;
	let avrPasswordStrength: number;


	if (passwords != undefined){

		passwords.forEach(password => {
			sumPasswordLength = sumPasswordLength + password.length;
			sumPasswordStrength = sumPasswordStrength + passwordStrength(password);
		});

		avrPasswordStrength = (sumPasswordLength*sumPasswordStrength)/passwords.length;

		if (avrPasswordStrength >= great){
			strength = "great";
		}
		else if (avrPasswordStrength >= good) {
			strength = "good";
		}
		else if (avrPasswordStrength >= bad) {
			strength = "bad";
		}
		else {
			strength = "terrible";
		}
	}
	else {
		strength = "none";
	}

	return strength;
};


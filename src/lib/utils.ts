import type { Admin, Record } from 'pocketbase';
import { onMount } from 'svelte';

import * as CryptoJS from 'crypto-js';
import zxcvbn from 'zxcvbn-typescript';

export const serializeNonPOJOS = (obj: Record | Admin | null) => {
	return structuredClone(obj);
};

export const generatePassword = (secret: string, specialChars: boolean) => {
	let chars: string[];
	if (specialChars) {
		chars = [
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!&$%#',
			'0123456789',
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!&$%#'
		];
	} else {
		chars = [
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
			'0123456789',
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		];
	}
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
		[11, 6, 7]
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

export const encryptUserPassword = (password: string, secret: string) => {
	return CryptoJS.AES.encrypt(password, secret).toString();
};

export const getPassword = (password: string, secret: string) => {
	return CryptoJS.AES.decrypt(password, secret).toString(CryptoJS.enc.Utf8);
};

export const passwordStrength = (password: string) => {
	return zxcvbn(password).score;
};

export const averagePasswordStrength = (
	passwords: [websiteID: string, website: string, password: string] | undefined
) => {
	// Set strength to -1 so we know there are no passwords.
	let strength = -1;
	if (passwords) {
		// Reset strength since there is atleast 1 password
		strength = 0;
		// Loop through each password and add the score
		passwords?.forEach((e) => {
			strength += zxcvbn(e[2]).score;
		});
		// Divide by amount of passwords to get average strength
		strength /= passwords?.length;
	}
	return strength;
};

export const navScroll = () => {
	onMount(() => {
		const navbar = document.getElementById('navbar');
		const currentPage = window.location.pathname;

		if (navbar && scrollY > 0) {
			navbar.style.transition = 'background-color 0.35s ease-out';
			navbar.style.backgroundColor = 'white';
			navbar.style.borderBottomWidth = '1px';
		}

		window.addEventListener('scroll', () => {
			if (navbar) {
				// tilføjer bare en transition så det føles smooth
				navbar.style.transition = 'background-color 0.35s ease-out';

				// Sætter baggrundsfarven baseret så Scroll position, og om man er på mainpage
				navbar.style.backgroundColor =
					scrollY > 0 ? 'white' : currentPage == '/' ? 'transparent' : 'white';
				navbar.style.borderBottomWidth = scrollY > 0 ? '1px' : currentPage == '/' ? '0px' : '1px';
			}
		});
	});
};
export const isValidCard = (number: string) => {
	let validCard = false;
	let cardType = 'None';
	let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
	let mastercard = new RegExp('^5[1-5][0-9]{14}$');
	let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
	let dankort = new RegExp('5019(?:[- ]?[0-9]{4}){3}');

	if (visa.test(number)) {
		validCard = true;
		cardType = 'Visa';
	} else if (mastercard.test(number)) {
		validCard = true;
		cardType = 'Mastercard';
	} else if (mastercard2.test(number)) {
		validCard = true;
		cardType = 'Mastercard';
	} else if (dankort.test(number)) {
		validCard = true;
		cardType = 'Dankort';
	} else {
		validCard = false;
		cardType = 'None';
	}
	return { validCard, cardType };
};

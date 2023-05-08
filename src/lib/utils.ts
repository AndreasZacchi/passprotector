import type { Admin, Record } from 'pocketbase';
import { onMount } from 'svelte';

import * as CryptoJS from 'crypto-js';
import zxcvbn from 'zxcvbn-typescript';

export const serializeNonPOJOS = (obj: Record | Admin | null) => {
	return structuredClone(obj);
};

export const generatePassword = (secret: string) => {
	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!&$%#';
	let password = Array.from(crypto.getRandomValues(new Uint32Array(chars.length / 2)))
		.map((randomValue) => chars[randomValue % chars.length])
		.join('');

	return encryptUserPassword(password, secret);
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

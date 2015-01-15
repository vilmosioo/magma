'use strict';

var // request = require('request-promise'),
	//util = require('util'),
	promise = require('bluebird');
	//SEARCH = 'https://www.googleapis.com/books/v1/volumes?q=%s&filter=free-ebooks&key=' + process.env.GOOGLE_KEY;

var mock = {
	"kind": "books#volumes",
	"totalItems": 454,
	"items": [
		{
			"kind": "books#volume",
			"id": "xyYVAAAAYAAJ",
			"etag": "6SJoInDUy3Y",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/xyYVAAAAYAAJ",
			"volumeInfo": {
				"title": "Childhood and Youth",
				"subtitle": "A Tale",
				"authors": [
					"graf Leo Tolstoy"
				],
				"publishedDate": "1862",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "1.0.1.0.full.1",
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=xyYVAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=xyYVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"previewLink": "http://books.google.co.uk/books?id=xyYVAAAAYAAJ&printsec=frontcover&dq=Tolstoy&as_brr=7&hl=&cd=1&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=xyYVAAAAYAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/Childhood_and_Youth.html?hl=&id=xyYVAAAAYAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=xyYVAAAAYAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false,
					"downloadLink": "http://books.google.co.uk/books/download/Childhood_and_Youth.epub?id=xyYVAAAAYAAJ&hl=&output=epub&source=gbs_api"
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/Childhood_and_Youth.pdf?id=xyYVAAAAYAAJ&hl=&output=pdf&sig=ACfU3U36Q7dGa380fQ9suL8XrA0gYHHgNQ&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			}
		},
		{
			"kind": "books#volume",
			"id": "9H8CAAAAYAAJ",
			"etag": "BeXJIRUF2+4",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/9H8CAAAAYAAJ",
			"volumeInfo": {
				"title": "The Omnibus of Modern Romance",
				"subtitle": "(Six Inside) ...",
				"publishedDate": "1844",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "full-1.0.0",
				"previewLink": "http://books.google.co.uk/books?id=9H8CAAAAYAAJ&pg=PA77&dq=Tolstoy&as_brr=7&hl=&cd=2&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=9H8CAAAAYAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/The_Omnibus_of_Modern_Romance.html?hl=&id=9H8CAAAAYAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=9H8CAAAAYAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/The_Omnibus_of_Modern_Romance.pdf?id=9H8CAAAAYAAJ&hl=&output=pdf&sig=ACfU3U1L9DGRtlsRcFn37VCgaQZBy3dmXg&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			},
			"searchInfo": {
				"textSnippet": "\u003cb\u003eTolstoy\u003c/b\u003e dressed as ! a private citizen, lived retired, visited bautiously all the hotels\u003cbr\u003e\n, all the churches, resorts of dissipation, and public places ; but always in vain. \u003cbr\u003e\nOne evening he was in a hotel, with his glass of wine before him, where many&nbsp;..."
			}
		},
		{
			"kind": "books#volume",
			"id": "PQ8DAAAAYAAJ",
			"etag": "rO27tQGQ6Bo",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/PQ8DAAAAYAAJ",
			"volumeInfo": {
				"title": "Catalog of Copyright Entries",
				"subtitle": "Works of art...",
				"publishedDate": "1911",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "0.2.1.0.full.1",
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=PQ8DAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=PQ8DAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"previewLink": "http://books.google.co.uk/books?id=PQ8DAAAAYAAJ&pg=RA1-PA69&dq=Tolstoy&as_brr=7&hl=&cd=3&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=PQ8DAAAAYAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/Catalog_of_Copyright_Entries.html?hl=&id=PQ8DAAAAYAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=PQ8DAAAAYAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/Catalog_of_Copyright_Entries.pdf?id=PQ8DAAAAYAAJ&hl=&output=pdf&sig=ACfU3U2_cxDn_fItOYL3evk4GCoKVfvVvQ&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			},
			"searchInfo": {
				"textSnippet": "Sorolla. — Spanish dancer.— Svirsky (Lime). danseuse.—-\u003cb\u003eTolstoy\u003c/b\u003e, soc., New [\u003cbr\u003e\n3872-3951 &#39;hust of, (brouze).—\u003cb\u003eTolstoy\u003c/b\u003e, bust of, (plaster).—Toistoy on horseback, \u003cbr\u003e\n1899, front view—\u003cb\u003eTolstoy\u003c/b\u003e on horseback. 1899, side view—\u003cb\u003eTolstoy\u003c/b\u003e on horseback."
			}
		},
		{
			"kind": "books#volume",
			"id": "i0gHAAAAQAAJ",
			"etag": "0hm09V22K/8",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/i0gHAAAAQAAJ",
			"volumeInfo": {
				"title": "The Maid of Orleans",
				"authors": [
					"John Elliot Drinkwater Bethune"
				],
				"publishedDate": "1848",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "full-1.0.0",
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=i0gHAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=i0gHAAAAQAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"previewLink": "http://books.google.co.uk/books?id=i0gHAAAAQAAJ&pg=PR21&dq=Tolstoy&as_brr=7&hl=&cd=4&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=i0gHAAAAQAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/The_Maid_of_Orleans.html?hl=&id=i0gHAAAAQAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=i0gHAAAAQAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/The_Maid_of_Orleans.pdf?id=i0gHAAAAQAAJ&hl=&output=pdf&sig=ACfU3U3hHTD8bm5tJK0RJEA0NsmOdbNYYg&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			},
			"searchInfo": {
				"textSnippet": "John Elliot Drinkwater Bethune. Crown 8vo, about 350 pp. each, Cloth Cover, 2/6 \u003cbr\u003e\nper Vol.; Half-Polished Morocco, Gilt Top, 5s. Count \u003cb\u003eTolstoy&#39;s\u003c/b\u003e Works. The \u003cbr\u003e\nfollowing Volumes are already issued — A RUSSIAN PROPRIETOR. THE \u003cbr\u003e\nCOSSACKS."
			}
		},
		{
			"kind": "books#volume",
			"id": "xtJbAAAAQAAJ",
			"etag": "Ndjn1mi3TCs",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/xtJbAAAAQAAJ",
			"volumeInfo": {
				"title": "Réponse à m. le comte de Tolstoy [a reply to his Réplique à la Réponse de m. Magnier].",
				"authors": [
					"Victor Magnier",
					"Yakov Nikolaevich Tolstoi (graf.)"
				],
				"publishedDate": "1829",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "full-1.0.0",
				"previewLink": "http://books.google.co.uk/books?id=xtJbAAAAQAAJ&pg=PA3&dq=Tolstoy&as_brr=7&hl=&cd=5&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=xtJbAAAAQAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/R%C3%A9ponse_%C3%A0_m_le_comte_de_Tolstoy_a_repl.html?hl=&id=xtJbAAAAQAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=xtJbAAAAQAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false,
					"downloadLink": "http://books.google.co.uk/books/download/R%C3%A9ponse_%C3%A0_m_le_comte_de_Tolstoy_a_repl.epub?id=xtJbAAAAQAAJ&hl=&output=epub&source=gbs_api"
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/R%C3%A9ponse_%C3%A0_m_le_comte_de_Tolstoy_a_repl.pdf?id=xtJbAAAAQAAJ&hl=&output=pdf&sig=ACfU3U1Ker-V0Yw47TuJNsCLipnsyVQ1pQ&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			},
			"searchInfo": {
				"textSnippet": "M. LE COMTE DE \u003cb\u003eTOLSTOY\u003c/b\u003e, CHAMBELLAN ni: SA MAJESTÉ I.Y «ITIttTll CF. \u003cbr\u003e\nRISS1E , ATTACHÉ A L&#39;AMBASSADE RUSSE EN FRANCE , ETC., ETC., ETC.; ? \u003cbr\u003e\nOfficier «!&#39;!&#39;.!;.; \\i;.|..r Français, Chevalier de la Legion d&#39;Honneur. ancien&nbsp;..."
			}
		},
		{
			"kind": "books#volume",
			"id": "NuYkAAAAYAAJ",
			"etag": "v3KbYlo7NjQ",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/NuYkAAAAYAAJ",
			"volumeInfo": {
				"title": "History of the consulate and the empire of France under Napoleon",
				"subtitle": "Forming a sequel to \"The history of the French revolution\".",
				"authors": [
					"Adolphe Thiers"
				],
				"publishedDate": "1849",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "full-1.0.0",
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=NuYkAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=NuYkAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"previewLink": "http://books.google.co.uk/books?id=NuYkAAAAYAAJ&pg=PA234&dq=Tolstoy&as_brr=7&hl=&cd=6&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=NuYkAAAAYAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/History_of_the_consulate_and_the_empire.html?hl=&id=NuYkAAAAYAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=NuYkAAAAYAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false,
					"downloadLink": "http://books.google.co.uk/books/download/History_of_the_consulate_and_the_empire.epub?id=NuYkAAAAYAAJ&hl=&output=epub&source=gbs_api"
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/History_of_the_consulate_and_the_empire.pdf?id=NuYkAAAAYAAJ&hl=&output=pdf&sig=ACfU3U1OJAvoDx7qREjUu1KyCoVu0eD8TA&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			},
			"searchInfo": {
				"textSnippet": "M. de \u003cb\u003eTolstoy\u003c/b\u003e had conceived that all had been told, that the sacrifice of the empire \u003cbr\u003e\nof the East was made, that he had come to Paris merely to sign the partition of \u003cbr\u003e\nTurkey, and the acquisition, if not of Constantinople and the Dardanelles, at least\u003cbr\u003e\n&nbsp;..."
			}
		},
		{
			"kind": "books#volume",
			"id": "nv1CAAAAcAAJ",
			"etag": "PlRmmOXOzMs",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/nv1CAAAAcAAJ",
			"volumeInfo": {
				"title": "Correspondence Relative to the Affairs of Hungary",
				"subtitle": "1847 - 1849 : Presented to Both Houses of Parliament by Command of Her Majesty August 15, 1850",
				"publishedDate": "1850",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "0.1.1.0.full.1",
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=nv1CAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=nv1CAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"previewLink": "http://books.google.co.uk/books?id=nv1CAAAAcAAJ&pg=PA297&dq=Tolstoy&as_brr=7&hl=&cd=7&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=nv1CAAAAcAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/Correspondence_Relative_to_the_Affairs_o.html?hl=&id=nv1CAAAAcAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=nv1CAAAAcAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/Correspondence_Relative_to_the_Affairs_o.pdf?id=nv1CAAAAcAAJ&hl=&output=pdf&sig=ACfU3U22CnLXRGkKEbg7APu2PHjiTLMxcw&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			},
			"searchInfo": {
				"textSnippet": "L&#39;avant-garde sous le commandement du Lieutenant-Général Comte \u003cb\u003eTolstoy\u003c/b\u003e, et \u003cbr\u003e\ncomposée d&#39;une brigade d&#39;infanterie, d&#39;une brigade de cavalerie, avec le \u003cbr\u003e\nrégiment Musulman et de l&#39;artillerie, a été dirigée sur Aszod ; ce Généi&#39;al a reçu \u003cbr\u003e\nordre&nbsp;..."
			}
		},
		{
			"kind": "books#volume",
			"id": "q6shAQAAIAAJ",
			"etag": "GcIpxE4D53M",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/q6shAQAAIAAJ",
			"volumeInfo": {
				"title": "Catalog of Copyright Entries. New Series",
				"subtitle": "1931",
				"authors": [
					"Library of Congress. Copyright Office"
				],
				"publishedDate": "1932",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "1.0.1.0.full.1",
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=q6shAQAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=q6shAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"previewLink": "http://books.google.co.uk/books?id=q6shAQAAIAAJ&pg=PA848&dq=Tolstoy&as_brr=7&hl=&cd=8&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=q6shAQAAIAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/Catalog_of_Copyright_Entries_New_Series.html?hl=&id=q6shAQAAIAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=q6shAQAAIAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false,
					"downloadLink": "http://books.google.co.uk/books/download/Catalog_of_Copyright_Entries_New_Series.epub?id=q6shAQAAIAAJ&hl=&output=epub&source=gbs_api"
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/Catalog_of_Copyright_Entries_New_Series.pdf?id=q6shAQAAIAAJ&hl=&output=pdf&sig=ACfU3U1_0KGViDjTmRi-sLqZ5uYEvH3zPw&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			},
			"searchInfo": {
				"textSnippet": "\u003cb\u003eTolstoy\u003c/b\u003e: literary fragments, letters and reminiscences not previously published, \u003cbr\u003e\nissued under the authority of the \u003cb\u003eTolstoy\u003c/b\u003e family ; edited by René Fûlôp-Miller ; \u003cbr\u003e\ntranslated by Paul England. New York, L. MacVeagh, The Dial press, 1931. xvi, \u003cbr\u003e\n330&nbsp;..."
			}
		},
		{
			"kind": "books#volume",
			"id": "KZdMAAAAcAAJ",
			"etag": "dj1yTtt30zk",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/KZdMAAAAcAAJ",
			"volumeInfo": {
				"title": "Accounts and papers",
				"authors": [
					"Great Britain House of Commons"
				],
				"publishedDate": "1851",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "full-1.0.0",
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=KZdMAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=KZdMAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"previewLink": "http://books.google.co.uk/books?id=KZdMAAAAcAAJ&pg=PA297&dq=Tolstoy&as_brr=7&hl=&cd=9&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=KZdMAAAAcAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/Accounts_and_papers.html?hl=&id=KZdMAAAAcAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=KZdMAAAAcAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/Accounts_and_papers.pdf?id=KZdMAAAAcAAJ&hl=&output=pdf&sig=ACfU3U35pY0WIEfA8ly4y5RA1-6_3vO9Fg&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			},
			"searchInfo": {
				"textSnippet": "L&#39;avant-garde sous le commandement du Lieutenant-G énéral Comte \u003cb\u003eTolstoy\u003c/b\u003e, et \u003cbr\u003e\ncomposée d&#39;une brigade d&#39;infanterie, d&#39;une brigade de cavalerie, avec le \u003cbr\u003e\nrégiment Musulman et de Partillerie, a été dirigée sur Aszod ; ce Général a reçu \u003cbr\u003e\nordre&nbsp;..."
			}
		},
		{
			"kind": "books#volume",
			"id": "K8s-AAAAcAAJ",
			"etag": "9suREUZkifc",
			"selfLink": "https://www.googleapis.com/books/v1/volumes/K8s-AAAAcAAJ",
			"volumeInfo": {
				"title": "Official descriptive and illustrated Catalogue of the great Exhibition of the Works of Industry of all Nations",
				"subtitle": "1851",
				"publishedDate": "1851",
				"readingModes": {
					"text": false,
					"image": true
				},
				"contentVersion": "full-1.0.0",
				"imageLinks": {
					"smallThumbnail": "http://books.google.com/books/content?id=K8s-AAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
					"thumbnail": "http://books.google.com/books/content?id=K8s-AAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				"previewLink": "http://books.google.co.uk/books?id=K8s-AAAAcAAJ&pg=PR197&dq=Tolstoy&as_brr=7&hl=&cd=10&source=gbs_api",
				"infoLink": "http://books.google.co.uk/books?id=K8s-AAAAcAAJ&dq=Tolstoy&as_brr=7&hl=&source=gbs_api",
				"canonicalVolumeLink": "http://books.google.co.uk/books/about/Official_descriptive_and_illustrated_Cat.html?hl=&id=K8s-AAAAcAAJ"
			},
			"saleInfo": {
				"country": "GB",
				"buyLink": "http://books.google.co.uk/books?id=K8s-AAAAcAAJ&dq=Tolstoy&as_brr=7&hl=&buy=&source=gbs_api"
			},
			"accessInfo": {
				"country": "GB",
				"epub": {
					"isAvailable": false
				},
				"pdf": {
					"isAvailable": true,
					"downloadLink": "http://books.google.co.uk/books/download/Official_descriptive_and_illustrated_Cat.pdf?id=K8s-AAAAcAAJ&hl=&output=pdf&sig=ACfU3U2KuzHA31x7aQvvm05suPzKYEJGhA&source=gbs_api"
				},
				"accessViewStatus": "FULL_PUBLIC_DOMAIN"
			},
			"searchInfo": {
				"textSnippet": "Malachite furniture. l89 l378 Russia - 323 Demidoff, Messrs. - Malachite vases. \u003cbr\u003e\n2l6 l38l Russia - 328 \u003cb\u003eTolstoy\u003c/b\u003e, Count Medallion. 2l7 l38l Russia - 328 \u003cb\u003eTolstoy\u003c/b\u003e, \u003cbr\u003e\nCount Ditto. 2l8 l38l Russia - 828 \u003cb\u003eTolstoy\u003c/b\u003e, Count Ditto. 2l9 l38l Russia - 828 \u003cbr\u003e\n\u003cb\u003eTolstoy\u003c/b\u003e,&nbsp;..."
			}
		}
	]
};

module.exports = {
	search: function(){
		return new promise(function(resolve){
			resolve(mock);
		});
		//return request(util.format(SEARCH, q));
	}
};
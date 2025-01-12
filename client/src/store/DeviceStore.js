import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
			{
				id: 1,
				name: 'Samsung',
			},
			{
				id: 2,
				name: 'Apple',
			},
			{
				id: 3,
				name: 'Xiaomi',
			},
		]
		this._brands = [
			{
				id: 1,
				name: 'Холодильники',
			},
			{
				id: 2,
				name: 'Смартфоны',
			},
			{
				id: 3,
				name: 'Ноутбуки',
			},
		]
		this._devices = [
			{
				id: 1,
				name: '15 pro',
				price: 150000,
				raiting: 3,
				img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118407662?x=1800&y=1800&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=1800&ey=1800&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=1800&cdy=1800',
				typeId: 2,
				brandId: 2,
			},
			{
				id: 2,
				name: 'biruca',
				price: 50000,
				raiting: 4,
				img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118407662?x=1800&y=1800&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=1800&ey=1800&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=1800&cdy=1800',
				typeId: 1,
				brandId: 1,
			},
			{
				id: 3,
				name: 'xiaomi pro',
				price: 10000,
				raiting: 5,
				img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118407662?x=1800&y=1800&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=1800&ey=1800&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=1800&cdy=1800',
				typeId: 2,
				brandId: 1,
			},
		]
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}

	setBrands(brands) {
		this._brands = brands
	}

	setDevices(devices) {
		this._devices = devices
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get devices() {
		return this._devices
	}
}

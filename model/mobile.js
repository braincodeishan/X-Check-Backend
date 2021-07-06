const mongoose = require('mongoose')

const mobileSchema = new mongoose.Schema(
	{
		name: { type: String, required: true},
		price: { type: Number, required: true},
		id: { type: String, required: true, unique: true},
		announce: { type: String, required: true},
		available: { type: String, required: true},
		os: { type: String, required: true},
		chipset: { type: String, required: true},
		cpu: { type: String, required: true},
		ram: { type: String, required: true},
		gpu: { type: String, required: true},
		internal: { type: String, required: true},
		card: { type: String, required: true},
		camera: { type: String, required: true},
		videoRear: { type: String, required: true},
		frontCamera: { type: String, required: true},
		videoFront: { type: String, required: true},
		display: { type: String, required: true},
		displayType: { type: String, required: true},
		resolution: { type: String, required: true},
		ram1: { type: String, required: true},
		dimensity: { type: String, required: true},
		battery1: { type: String, required: true},
		battery1Type: { type: String, required: true},
		battery: { type: String, required: true},
		batteryType: { type: String, required: true},
		charging: { type: String, required: true},
		chargingDetails: { type: String, required: true},
		technology: { type: String, required: true},
		dimension: { type: String, required: true},
		weight: { type: String, required: true},
		sim: { type: String, required: true},
		
		
	},
	{ collection: 'mobiledetail' }
)

const model = mongoose.model('mobileSchema', mobileSchema)

module.exports = model

import { prop, index, getModelForClass } from "@typegoose/typegoose";

@index({ email: 1, phone: 1, uid: 1 })
export class User {
	@prop()
	uid: number;

	@prop({ required: true })
	name: string;

	@prop({ required: true, unique: true })
	email: string;

	@prop({ required: true, unique: true, min: 1000000000, max: 9999999999 })
	phone: number;

	@prop({ required: true })
	password: string;

	@prop({ required: true, enum: ["teacher", "user", "admin"] })
	type: string;

	@prop({ required: true, default: false })
	verified: boolean;
}

const UserModel = getModelForClass(User, {
	schemaOptions: { timestamps: true },
});

export default UserModel;
